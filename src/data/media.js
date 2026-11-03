/*
 * Video assets. One definition, used by the homepage featured band and the
 * ReWa case study page.
 *
 * Source was 847 MB of 4K at 57 Mbps; transcoded to 1080p two-pass at
 * 2.4 Mbps (34.9 MB) with +faststart.
 *
 * `captions` is null until the client supplies a transcript — see the note in
 * VideoPlayer.jsx. Set it to '/video/rewa-project.en.vtt' once the file is in
 * /public/video and both placements gain captions at once.
 */
export const REWA_FILM = {
  src: '/video/rewa-project.mp4',
  posterJpg: '/video/rewa-poster.jpg',
  posterWebp: '/video/rewa-poster.webp',
  alt: "Aerial view of the restored solar array at ReWa's Greenville campus",
  duration: '1:58',
  durationIso: 'PT1M58S',
  title: 'Narrated site walkthrough',
  captions: null,
};
