/* =============================================================================
   THE HANDLEY CUP — PAGE REVEAL SCHEDULE

   To lock a page until a certain date/time, add it below using its exact
   filename as it appears in the URL. Anyone visiting before that date/time
   sees a simple "Coming Soon" screen instead of the real page — the page's
   actual content and data are untouched and still there underneath, just
   hidden until the date hits.

   Format: 'YYYY-MM-DDTHH:mm:ss' — this is LOCAL time (UK time), 24-hour clock.
   Example: '2027-01-15T09:00:00' = 9am on 15th January 2027.

   To unlock a page immediately, either delete its line below, or just set
   its date to any time in the past (e.g. '2020-01-01T00:00:00').

   This file is the ONLY thing you need to edit to lock/unlock pages — no
   other files need touching. Just re-upload this one file to GitHub each
   time you change something.

   ---- LAUNCH STATE ----
   Every page below is locked until 12:00 on 30 January 2027 (event day) as a safety net. Only
   index.html (the homepage, which isn't lockable) is visible at launch.
   As you decide each day which page to reveal, find its line below and
   either delete the line or change its date to the past — see the chat
   walkthrough for the exact steps.
   ========================================================================= */

const REVEAL_DATES = {
  'players.html': '2027-01-30T12:00:00',
  'sheet.html': '2027-01-30T12:00:00',
  'events.html': '2027-01-30T12:00:00',
  'groups.html': '2027-01-30T12:00:00',
  'roll-of-honour.html': '2027-01-30T12:00:00',
  'records.html': '2027-01-30T12:00:00',
  'power-rankings.html': '2027-01-30T12:00:00',
  'entry-list.html': '2027-01-30T12:00:00',
  'nickname-wall.html': '2027-01-30T12:00:00',
  'draw-predictor.html': '2027-01-30T12:00:00',
  'head-to-head.html': '2027-01-30T12:00:00',
  'next-event.html': '2027-01-30T12:00:00',
};

/* ---- PLAYER PROFILES ----
   Each player profile (player.html?id=...) is locked individually below,
   listed in POWER RANKINGS ORDER — the number in each comment (#1, #2 ...)
   is that player's rank on the Power Rankings page, so when the chat votes
   a number you can find the line instantly.
   To reveal a player: delete their line, or set the date to the past.
   Players not listed here are always visible. */
const PLAYER_REVEAL_DATES = {
  'charlie-marshall': '2027-01-30T12:00:00', // #1 Charlie Marshall
  'dale-dennett': '2027-01-30T12:00:00', // #2 Dale Dennett
  'jamie-flint': '2027-01-30T12:00:00', // #3 Jamie Flint
  'todd-haynes': '2027-01-30T12:00:00', // #4 Todd Haynes
  'oliver-burgess': '2027-01-30T12:00:00', // #5 Oliver Burgess
  'curtis-thorpe': '2027-01-30T12:00:00', // #6 Curtis Thorpe
  'deck-ingber': '2027-01-30T12:00:00', // #7 Deck Ingber
  'alex-wright': '2027-01-30T12:00:00', // #8 Alex Wright
  'eddie-castaldo': '2027-01-30T12:00:00', // #9 Eddie Castaldo
  'morgan-shillito': '2027-01-30T12:00:00', // #10 Morgan Shillito
  'dom-tofts': '2027-01-30T12:00:00', // #11 Dom Tofts
  'will-sturla': '2027-01-30T12:00:00', // #12 Will Sturla
  'oli-bartlett': '2027-01-30T12:00:00', // #13 Oli Bartlett
  'dan-harrison': '2027-01-30T12:00:00', // #14 Dan Harrison
  'nathan-hemmingway': '2027-01-30T12:00:00', // #15 Nathan Hemmingway
  'bradley-truelove': '2027-01-30T12:00:00', // #16 Bradley Truelove
  'connor-bowler': '2027-01-30T12:00:00', // #17 Connor Bowler
  'oli-gubbins': '2027-01-30T12:00:00', // #18 Oli Gubbins
  'jessie-sale': '2027-01-30T12:00:00', // #19 Jessie Sale
  'hugo-nilsson': '2027-01-30T12:00:00', // #20 Hugo Nilsson
  'cam-thorpe': '2027-01-30T12:00:00', // #21 Cam Thorpe
  'oliver-wilson': '2027-01-30T12:00:00', // #22 Oliver Wilson
  'finley-sanderson': '2027-01-30T12:00:00', // #23 Finley Sanderson
  'bart-timmer': '2027-01-30T12:00:00', // #24 Bart Timmer
  'dan-rushton': '2027-01-30T12:00:00', // #25 Dan Rushton
  'james-buckby': '2027-01-30T12:00:00', // #26 James Buckby
  'joe-evans': '2027-01-30T12:00:00', // #27 Joe Evans
  'zach-hodgson': '2027-01-30T12:00:00', // #28 Zach Hodgson
  'jack-clucas': '2027-01-30T12:00:00', // #29 Jack Clucas
  'laura-bugge': '2027-01-30T12:00:00', // #30 Laura Bugge
  'dereece-ohara': '2027-01-30T12:00:00', // #31 Dereece O'Hara
  'will-ellis': '2027-01-30T12:00:00', // #32 Will Ellis
  'kelham-elliot': '2027-01-30T12:00:00', // #33 Kelham Elliot
  'joe-ellett': '2027-01-30T12:00:00', // #34 Joe Ellett
  'will-north': '2027-01-30T12:00:00', // #35 Will North
  'louis-bell': '2027-01-30T12:00:00', // #36 Louis Bell
  'ben-pellington': '2027-01-30T12:00:00', // #37 Ben Pellington
  'kieran-fitzgibbon': '2027-01-30T12:00:00', // #38 Kieran Fitzgibbon
  'nathan-stewart': '2027-01-30T12:00:00', // #39 Nathan Stewart
  'harvey-thompson': '2027-01-30T12:00:00', // #40 Harvey Thompson
  'calum-brown': '2027-01-30T12:00:00', // #41 Calum Brown
  'tom-russell': '2027-01-30T12:00:00', // #42 Tom Russell
  'tom-hodder': '2027-01-30T12:00:00', // #43 Tom Hodder
  'luke-mccormack': '2027-01-30T12:00:00', // #44 Luke McCormack
  'dan-burton': '2027-01-30T12:00:00', // #45 Dan Burton
  'fillip-brom': '2027-01-30T12:00:00', // #46 Fillip Brom
  'reuben-evans': '2027-01-30T12:00:00', // #47 Reuben Evans
  'jack-whiteley': '2027-01-30T12:00:00', // #48 Jack Whiteley
  'jamesey-ennis': '2027-01-30T12:00:00', // #49 Jamesey Ennis
  'hedley-paul-keegan': '2027-01-30T12:00:00', // #50 Hedley-Paul Keegan
  'blake-longden': '2027-01-30T12:00:00', // #51 Blake Longden
  'josh-longden': '2027-01-30T12:00:00', // #52 Josh Longden
  'finley-nottingham': '2027-01-30T12:00:00', // #53 Finley Nottingham
  'catlin-cope': '2027-01-30T12:00:00', // #54 Catlin Cope
  'callum-woodcock': '2027-01-30T12:00:00', // #55 Callum Woodcock
  'thomas-palmer': '2027-01-30T12:00:00', // #56 Thomas Palmer
  'jono-downing': '2027-01-30T12:00:00', // #57 Jono Downing
  'matt-davies': '2027-01-30T12:00:00', // #58 Matt Davies
  'olly-doherty': '2027-01-30T12:00:00', // #59 Olly Doherty
  'will-burgess': '2027-01-30T12:00:00', // #60 Will Burgess
  'alex-howes': '2027-01-30T12:00:00', // #61 Alex Howes
  'billy-bennett': '2027-01-30T12:00:00', // #62 Billy Bennett
  'chris-ward': '2027-01-30T12:00:00', // #63 Chris Ward
  'alex-botha': '2027-01-30T12:00:00', // #64 Alex Botha
  'lewis-ruston': '2027-01-30T12:00:00', // #65 Lewis Rushton
  'alex-mccowen': '2027-01-30T12:00:00', // #66 Alex McCowen
  'sam-taylor': '2027-01-30T12:00:00', // #67 Sam Taylor
  'tom-khan': '2027-01-30T12:00:00', // #68 Tom Khan
  'luke-hider': '2027-01-30T12:00:00', // #69 Luke Hider
  'luke-gribbin': '2027-01-30T12:00:00', // #70 Luke Gribbin
  'joe-harrington': '2027-01-30T12:00:00', // #71 Joe Harrington
  'daniel-fingram': '2027-01-30T12:00:00', // #72 Daniel Fingram
  'callum-read': '2027-01-30T12:00:00', // #73 Callum Read
  'neiran-donnelley': '2027-01-30T12:00:00', // #74 Neiran Donnelley
  'jack-briggs': '2027-01-30T12:00:00', // #75 Jack Briggs
  'huxley-largan': '2027-01-30T12:00:00', // #76 Huxley Largan
  'henry-wheeler': '2027-01-30T12:00:00', // #77 Henry Wheeler
};
