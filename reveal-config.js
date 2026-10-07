/* =============================================================================
  THE HANDLEY CUP — PAGE REVEAL SCHEDULE

   To lock a page until a certain date/time, add it below using its exact
   filename as it appears in the URL. Anyone visiting before that date/time
   sees a simple "Coming Soon" screen instead of the real page — the page's
   actual content and data are untouched and still there underneath, just
   hidden until the date hits.

   Format: 'YYYY-MM-DDTHH:mm:ss' — this is LOCAL time (UK time), 24-hour clock.
   Example: '2027-01-15T00:00:00' = midnight on 15th January 2027.

   To unlock a page immediately, either delete its line below, or just set
   its date to any time in the past (e.g. '2020-01-01T00:00:00').

   This file is the ONLY thing you need to edit to lock/unlock pages — no
   other files need touching. Just re-upload this one file to GitHub each
   time you change something.

   ---- LAUNCH STATE ----
   Every page below is locked until 15th January 2027.
   Only index.html (the homepage, which isn't lockable) is visible at launch.
   ========================================================================= */

const REVEAL_DATES = {
  'player.html': '2027-01-30T00:00:00',
  'players.html': '2027-01-30T00:00:00',
  'sheet.html': '2027-01-30T00:00:00',
  'events.html': '2027-01-30T00:00:00',
  'groups.html': '2027-01-30T00:00:00',
  'roll-of-honour.html': '2027-01-30T00:00:00',
  'records.html': '2027-01-30T00:00:00',
  'power-rankings.html': '2027-01-30T00:00:00',
  'entry-list.html': '2027-01-30T00:00:00',
  'nickname-wall.html': '2027-01-30T00:00:00',
  'draw-predictor.html': '2027-01-30T00:00:00',
  'head-to-head.html': '2027-01-30T00:00:00',
  'next-event.html': '2027-01-30T00:00:00',
};
