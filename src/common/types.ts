// {
//   "wrapperType": "track",
//   "kind": "song",
//   "artistId": 15885,
//   "collectionId": 529020307,
//   "trackId": 529020329,
//   "artistName": "Usher",
//   "collectionName": "Versus",
//   "trackName": "DJ Got Us Fallin' In Love (feat. Pitbull)",
//   "collectionCensoredName": "Versus",
//   "trackCensoredName": "DJ Got Us Fallin' In Love (feat. Pitbull)",
//   "artistViewUrl": "https://music.apple.com/us/artist/usher/15885?uo=4",
//   "collectionViewUrl": "https://music.apple.com/us/album/dj-got-us-fallin-in-love-feat-pitbull/529020307?i=529020329&uo=4",
//   "trackViewUrl": "https://music.apple.com/us/album/dj-got-us-fallin-in-love-feat-pitbull/529020307?i=529020329&uo=4",
//   "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3b/06/f1/3b06f1dc-b091-c4a1-b7af-b7e57f35d1f8/mzaf_5682810428386429672.plus.aac.p.m4a",
//   "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ec/d4/ff/ecd4ff16-1cbe-7d2c-df3f-cca0802943e8/884977695137.jpg/30x30bb.jpg",
//   "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ec/d4/ff/ecd4ff16-1cbe-7d2c-df3f-cca0802943e8/884977695137.jpg/60x60bb.jpg",
//   "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/ec/d4/ff/ecd4ff16-1cbe-7d2c-df3f-cca0802943e8/884977695137.jpg/100x100bb.jpg",
//   "collectionPrice": 7.99,
//   "trackPrice": 1.29,
//   "releaseDate": "2010-07-13T07:00:00Z",
//   "collectionExplicitness": "notExplicit",
//   "trackExplicitness": "notExplicit",
//   "discCount": 1,
//   "discNumber": 1,
//   "trackCount": 9,
//   "trackNumber": 2,
//   "trackTimeMillis": 220800,
//   "country": "USA",
//   "currency": "USD",
//   "primaryGenreName": "R&B/Soul",
//   "isStreamable": true
// }

export type Track = {
  wrapperType: string;
  kind: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: string;
  trackViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artistName: string;
  artistViewUrl: string;
  previewUrl: string;
  primaryGenreName: string;
  collectionName: string;
  collectionViewUrl: string;
};
