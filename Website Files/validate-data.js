#!/usr/bin/env node
/* =============================================================================
   THE HANDLEY CUP — DATA VALIDATOR

   A standalone sanity-check for the hand-maintained *-data.js files. Not part
   of the live site — run it locally before you push updates:

     node validate-data.js

   It won't catch everything (typos in prose, wrong-but-plausible scores) but
   it will catch the class of bug that's easy to introduce by hand: dangling
   player IDs, mismatched scores, orphaned references between files, etc.

   Exits with a non-zero code if anything marked ERROR is found, so it can be
   wired into a pre-commit hook or CI step later if you want.
   ========================================================================= */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadVar(file, varname) {
  const code = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + `; this.__OUT = ${varname};`, sandbox);
  return sandbox.__OUT;
}

const errors = [];
const warnings = [];
function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

// ---- Load everything ----
const PLAYERS = loadVar('players-data.js', 'PLAYERS');
const POWER_RANKINGS = loadVar('power-rankings-data.js', 'POWER_RANKINGS');
const EVENTS = loadVar('events-data.js', 'EVENTS');
const ROLL_OF_HONOUR = loadVar('roll-of-honour-data.js', 'ROLL_OF_HONOUR');
const ENTRY_LIST = loadVar('entry-list-data.js', 'ENTRY_LIST');
const RECORDS = loadVar('records-data.js', 'RECORDS');

const playerIds = new Set(PLAYERS.map(p => p.id));
const playerNameById = {};
PLAYERS.forEach(p => { playerNameById[p.id] = p.name; });

// ---- 1. Duplicate / malformed player IDs ----
const seen = new Set();
PLAYERS.forEach(p => {
  if (!p.id) { err(`Player "${p.name}" has no id`); return; }
  if (seen.has(p.id)) err(`Duplicate player id: ${p.id}`);
  seen.add(p.id);
});

// ---- 2. Timeline opponentId sanity ----
PLAYERS.forEach(p => {
  (p.timeline || []).forEach(t => {
    if (t.opponentId && !playerIds.has(t.opponentId)) {
      err(`${p.name} (${p.id}) timeline ${t.year}: opponentId "${t.opponentId}" not found in PLAYERS`);
    }
    if (t.opponentId && t.opponentName && playerNameById[t.opponentId] !== t.opponentName) {
      warn(`${p.name} (${p.id}) timeline ${t.year}: opponentName "${t.opponentName}" doesn't match PLAYERS record for ${t.opponentId} ("${playerNameById[t.opponentId]}")`);
    }
  });
});

// ---- 3. POWER_RANKINGS <-> PLAYERS cross-check ----
const prIds = new Set(POWER_RANKINGS.map(r => r.id));
PLAYERS.forEach(p => {
  if (!p.placeholder && !prIds.has(p.id)) warn(`${p.name} (${p.id}) is not in POWER_RANKINGS`);
});
POWER_RANKINGS.forEach(r => {
  if (!playerIds.has(r.id)) err(`POWER_RANKINGS entry "${r.name}" (${r.id}) not found in PLAYERS`);
});
const prRanks = POWER_RANKINGS.map(r => r.rank).sort((a, b) => a - b);
prRanks.forEach((r, i) => { if (r !== i + 1) warn(`POWER_RANKINGS rank sequence has a gap or duplicate around rank ${r}`); });

// ---- 4. EVENTS: player IDs, score sanity, bracket consistency ----
Object.entries(EVENTS).forEach(([year, e]) => {
  Object.entries(e.groupFixtures || {}).forEach(([group, matches]) => {
    (matches || []).forEach(m => {
      [m.player1Id, m.player2Id].forEach(id => {
        if (id && !playerIds.has(id)) err(`${year} ${group}: player id "${id}" not found in PLAYERS`);
      });
      if (m.score1 != null && m.score2 != null && m.score1 === m.score2) {
        err(`${year} ${group}: ${m.player1} vs ${m.player2} has a drawn score (${m.score1}-${m.score2}) — legs can't tie`);
      }
    });
  });

  [['cupBracket', 'Handley Cup'], ['plateBracket', "Parson's Plate"]].forEach(([key, label]) => {
    Object.entries(e[key] || {}).forEach(([round, matches]) => {
      (matches || []).forEach(m => {
        [m.player1Id, m.player2Id, m.winnerId, m.loserId].forEach(id => {
          if (id && !playerIds.has(id)) err(`${year} ${label} ${round}: player id "${id}" not found in PLAYERS`);
        });
        if (m.winnerId && m.player1Id && m.player2Id &&
            m.winnerId !== m.player1Id && m.winnerId !== m.player2Id) {
          err(`${year} ${label} ${round}: winnerId "${m.winnerId}" isn't player1 or player2 in this match`);
        }
        if (m.winnerLegs != null && m.loserLegs != null && m.winnerLegs <= m.loserLegs) {
          err(`${year} ${label} ${round}: ${m.winner} beat ${m.loser} but winnerLegs (${m.winnerLegs}) <= loserLegs (${m.loserLegs})`);
        }
      });
    });
  });
});

// ---- 5. ROLL_OF_HONOUR ids ----
ROLL_OF_HONOUR.forEach(y => {
  ['winner', 'runnerUp', 'plateWinner'].forEach(key => {
    const entry = y[key];
    if (entry && entry.id && !playerIds.has(entry.id)) {
      err(`ROLL_OF_HONOUR ${y.year} ${key}: id "${entry.id}" not found in PLAYERS`);
    }
  });
  (y.semiFinalists || []).forEach(sf => {
    if (sf.id && !playerIds.has(sf.id)) err(`ROLL_OF_HONOUR ${y.year} semiFinalist: id "${sf.id}" not found in PLAYERS`);
  });
});

// ---- 6. ENTRY_LIST ids ----
ENTRY_LIST.years.forEach(y => {
  y.entrants.forEach(e => {
    if (e.id && !playerIds.has(e.id)) err(`ENTRY_LIST ${y.year}: entrant id "${e.id}" not found in PLAYERS`);
  });
  if (y.entrants.length !== y.entries) {
    warn(`ENTRY_LIST ${y.year}: entrants array has ${y.entrants.length} people but entries field says ${y.entries}`);
  }
});

// ---- 7. RECORDS ids ----
RECORDS.forEach(r => {
  if (r.playerId && !playerIds.has(r.playerId)) {
    err(`RECORDS: "${r.text.slice(0, 60)}..." references playerId "${r.playerId}" not found in PLAYERS`);
  }
});

// ---- Report ----
console.log(`Checked ${PLAYERS.length} players, ${Object.keys(EVENTS).length} seasons, ${RECORDS.length} records.\n`);

if (warnings.length) {
  console.log(`⚠️  ${warnings.length} warning(s):`);
  warnings.forEach(w => console.log(`   - ${w}`));
  console.log('');
}

if (errors.length) {
  console.log(`❌ ${errors.length} error(s):`);
  errors.forEach(e => console.log(`   - ${e}`));
  console.log('');
  process.exit(1);
} else {
  console.log('✅ No errors found.');
  process.exit(0);
}
