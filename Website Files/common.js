/* =============================================================================
   THE HANDLEY CUP — SHARED HELPERS
   Small presentational helpers used by multiple pages (flags, player-name
   links, avatar photos with fallback). Load this after players-data.js and
   before any page-specific <script> block that calls these functions.

   Kept deliberately tiny and dependency-free, same spirit as the rest of the
   site — no build step, just a script tag.
   ========================================================================= */

const FLAG_MAP = {
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Jamaica": "🇯🇲", "Sweden": "🇸🇪",
  "Slovakia": "🇸🇰", "Italy": "🇮🇹", "Netherlands": "🇳🇱", "South Africa": "🇿🇦",
};
function flagHtml(nationality) {
  const flag = FLAG_MAP[nationality];
  return flag ? `<span class="nat-flag" title="${nationality}">${flag}</span>` : '';
}

// Renders a player's name as a link to their profile if they have one,
// or plain text (or a dash, if no name at all) otherwise. Covers the
// "nameHtml(id, name)" / "opponentHtml(id, name)" pattern used across
// events, groups, head-to-head, timelines, entry lists, etc.
function nameHtml(id, name) {
  if (!name) return '<span class="steel-dim">—</span>';
  return (id && typeof PLAYERS !== 'undefined' && PLAYERS.some(p => p.id === id))
    ? `<a href="player.html?id=${encodeURIComponent(id)}">${name}</a>`
    : name;
}
// Alias — some pages historically called this opponentHtml.
const opponentHtml = nameHtml;

// Player silhouette shown when no photo is available.
const silhouette = `<svg viewBox="0 0 24 24" fill="#5B6770" xmlns="http://www.w3.org/2000/svg" style="width:60%;height:60%;">
    <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
  </svg>`;

// Optional player photo — drop `<player-id>.jpg` (or .jpeg/.png/.webp) into an
// `images/` folder next to these pages and it'll be picked up automatically.
// Fallback order for a player with no photo of their own:
//   1. images/default-player.jpg (or .jpeg/.png/.webp) — a shared placeholder photo, if you add one
//   2. the plain grey silhouette — always works, needs no file
const AVATAR_EXTS = ['jpg', 'jpeg', 'png', 'webp'];
function avatarHtml(p) {
  return `<img src="images/${encodeURIComponent(p.id)}.${AVATAR_EXTS[0]}" alt="${p.name}" class="avatar-photo" loading="lazy" data-ext="0" data-id="${p.id}" data-stage="player" onerror="handleAvatarError(this)">`;
}
function handleAvatarError(img) {
  const stage = img.dataset.stage;
  const next = parseInt(img.dataset.ext, 10) + 1;

  if (stage === 'player') {
    if (next < AVATAR_EXTS.length) {
      img.dataset.ext = next;
      img.src = `images/${encodeURIComponent(img.dataset.id)}.${AVATAR_EXTS[next]}`;
      return;
    }
    // no photo of their own — try the shared default-player image
    img.dataset.stage = 'default';
    img.dataset.ext = 0;
    img.src = `images/default-player.${AVATAR_EXTS[0]}`;
    return;
  }

  if (stage === 'default') {
    if (next < AVATAR_EXTS.length) {
      img.dataset.ext = next;
      img.src = `images/default-player.${AVATAR_EXTS[next]}`;
      return;
    }
  }

  // nothing found at all — fall back to the plain silhouette
  img.parentElement.innerHTML = silhouette;
}

/* =============================================================================
   NAV SEARCH — was duplicated inline on every page, now lives here once.
   Runs automatically if the page has the #navSearchBtn markup in its nav.
   ========================================================================= */
(function initNavSearch() {
  const btn = document.getElementById('navSearchBtn');
  const panel = document.getElementById('navSearchPanel');
  const input = document.getElementById('navSearchInput');
  const results = document.getElementById('navSearchResults');
  if (!btn || typeof PLAYERS === 'undefined') return;

  function openPanel() { panel.classList.add('open'); input.focus(); }
  function closePanel() { panel.classList.remove('open'); input.value = ''; results.innerHTML = ''; }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.contains('open') ? closePanel() : openPanel();
  });
  document.addEventListener('click', (e) => {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== btn) closePanel();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

  // a few joke queries return a themed result instead of "No players found"
  const JOKE_QUERIES = {
    'shithouse': `<div class="nav-search-empty">Multiple candidates found (Wilson, Hemmingway, Downing) — please narrow your search to a specific AGM.</div>`,
    'goat': `<div class="nav-search-empty">You mean <a href="player.html?id=charlie-marshall" class="nav-search-result" style="display:inline;">Charlie Marshall</a>? Obviously.</div>`,
    'dommo': `<div class="nav-search-empty">DOMMO! (try "Dom Tofts")</div>`,
    'best player': `<div class="nav-search-empty">It's Charlie Marshall. It's always Charlie Marshall.</div>`,
  };

  function draw(q) {
    if (!q) { results.innerHTML = ''; return; }
    const ql = q.toLowerCase();
    if (JOKE_QUERIES[ql]) { results.innerHTML = JOKE_QUERIES[ql]; return; }
    const matches = PLAYERS.filter(p => !p.placeholder &&
      (p.name.toLowerCase().includes(ql) || (p.nickname && p.nickname.toLowerCase().includes(ql)))
    ).slice(0, 8);
    results.innerHTML = matches.length
      ? matches.map(p => `<a href="player.html?id=${encodeURIComponent(p.id)}" class="nav-search-result">${p.name}${p.nickname ? ` <span class="nav-search-nick">&quot;${p.nickname}&quot;</span>` : ''}</a>`).join('')
      : `<div class="nav-search-empty">No players found</div>`;
  }
  input.addEventListener('input', () => draw(input.value.trim()));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const first = results.querySelector('.nav-search-result');
      if (first) window.location.href = first.getAttribute('href');
    }
  });
})();

/* =============================================================================
   EASTER EGGS
   ========================================================================= */

// 1. Console message for anyone poking around dev tools
console.log('%c🎯 The Handley Cup', 'font-size:18px; font-weight:bold; color:#E31C79;');
console.log('%cLooking for something? Charlie Marshall\'s unbeaten streak isn\'t hidden in here either.', 'color:#B79CB0;');

// 2. Type "MARSHALL" anywhere on the site → crown rain
(function crownRainTrigger() {
  let buffer = '';
  document.addEventListener('keydown', (e) => {
    if (e.key.length !== 1) return;
    buffer = (buffer + e.key).slice(-8).toLowerCase();
    if (buffer === 'marshall') crownRain();
  });
})();

function crownRain() {
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed; inset:0; pointer-events:none; z-index:9999; overflow:hidden;';
  document.body.appendChild(container);
  for (let i = 0; i < 40; i++) {
    const crown = document.createElement('div');
    crown.textContent = '👑';
    const left = Math.random() * 100;
    const delay = Math.random() * 0.6;
    const duration = 2.2 + Math.random() * 1.4;
    const size = 18 + Math.random() * 20;
    crown.style.cssText = `position:absolute; top:-40px; left:${left}vw; font-size:${size}px;
      animation: handleyCrownFall ${duration}s ease-in ${delay}s forwards;`;
    container.appendChild(crown);
  }
  setTimeout(() => container.remove(), 4500);
}

// keyframes for the crown fall, injected once
(function injectCrownKeyframes() {
  if (document.getElementById('handleyCrownKeyframes')) return;
  const style = document.createElement('style');
  style.id = 'handleyCrownKeyframes';
  style.textContent = `@keyframes handleyCrownFall {
    from { transform: translateY(0) rotate(0deg); opacity: 1; }
    to { transform: translateY(105vh) rotate(360deg); opacity: 0.85; }
  }`;
  document.head.appendChild(style);
})();

// 3. Click the nav logo 7 times (Marshall's title count) → secret page
(function logoClickEgg() {
  const logo = document.querySelector('.site-logo');
  if (!logo) return;
  let count = 0;
  let resetTimer = null;
  logo.addEventListener('click', (e) => {
    count++;
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { count = 0; }, 2000);
    if (count >= 7) {
      e.preventDefault();
      window.location.href = 'secret.html';
    }
  });
})();

// 4. Click any champion's crown → little burst right where you clicked
document.addEventListener('click', (e) => {
  const crown = e.target.closest('.avatar-crown');
  if (!crown) return;
  const rect = crown.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const burst = document.createElement('div');
    burst.textContent = '👑';
    const angle = (Math.PI * 2 * i) / 8;
    const dist = 30 + Math.random() * 20;
    burst.style.cssText = `position:fixed; left:${rect.left + rect.width / 2}px; top:${rect.top + rect.height / 2}px;
      font-size:14px; pointer-events:none; z-index:9999;
      animation: handleyCrownBurst 0.7s ease-out forwards;
      --dx:${Math.cos(angle) * dist}px; --dy:${Math.sin(angle) * dist}px;`;
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 750);
  }
});
(function injectBurstKeyframes() {
  if (document.getElementById('handleyBurstKeyframes')) return;
  const style = document.createElement('style');
  style.id = 'handleyBurstKeyframes';
  style.textContent = `@keyframes handleyCrownBurst {
    from { transform: translate(-50%, -50%) translate(0, 0); opacity: 1; }
    to { transform: translate(-50%, -50%) translate(var(--dx), var(--dy)); opacity: 0; }
  }`;
  document.head.appendChild(style);
})();

/* =============================================================================
   COLLAPSIBLE SECTIONS
   Mark a heading with class="section-heading collapsible" and
   data-collapse-target="someId" (pointing at the content to hide/show), plus
   a <span class="collapse-arrow">▾</span> inside it. Uses event delegation so
   it works on content rendered dynamically after the page loads (Records,
   player profiles, etc. build their sections via JS).
   ========================================================================= */
document.addEventListener('click', (e) => {
  const heading = e.target.closest('.section-heading.collapsible');
  if (!heading) return;
  const targetId = heading.getAttribute('data-collapse-target');
  const target = targetId && document.getElementById(targetId);
  if (!target) return;
  const collapsed = heading.classList.toggle('collapsed');
  target.style.display = collapsed ? 'none' : '';
});
