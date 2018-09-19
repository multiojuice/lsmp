
import React from 'react';
import AppleMusicLogo2 from '../../assets/AppleMusicLogo2.png';
import { ContentDiv, SpotifyDiv, LogoImg, SpotifySelected } from './styledComponents';

//style="width:100%;max-width:660px;overflow:hidden;background:transparent;"

export const AppleMusicSelectedAlbum = (props) => {
  return (
    <ContentDiv>
      <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src={`https://embed.music.apple.com/us/album/${props.data.id}`}></iframe>
    </ContentDiv>
  );
}

// export const SpotifySelectedArtist = (props) => {
//   return (
//     <ContentDiv>
//       <SpotifyDiv>
//         <LogoImg src={SpotifyLogo} />
//       </SpotifyDiv>
//       <iframe src={`https://open.spotify.com/embed/artist/${props.data.id}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
//       <SpotifySelected>
//         <h1>{props.data.name}</h1>
//         <h2>{props.data.genre}</h2>
//         <h2>{props.data.popularity}</h2>
//         <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.id}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
//       </SpotifySelected>
//     </ContentDiv>
//   );
// }
//
// export const SpotifySelectedPlaylist = (props) => {
//   return (
//     <ContentDiv>
//       <SpotifyDiv>
//         <LogoImg src={SpotifyLogo} />
//       </SpotifyDiv>
//       <SpotifySelected>
//         <h1>{props.data.name}</h1>
//         <h2>{props.data.owner}</h2>
//         <h2>{props.data.collabrative ? 'This is a collabrative playlist!' : 'This isn\'t collabrative'}</h2>
//       </SpotifySelected>
//     </ContentDiv>
//   );
// }
//
// export const SpotifySelectedTrack = (props) => {
//   return (
//     <ContentDiv>
//       <SpotifyDiv>
//         <LogoImg src={SpotifyLogo} />
//       </SpotifyDiv>
//       <iframe src={`https://open.spotify.com/embed/album/${props.data.albumId}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
//       <SpotifySelected>
//         <h1>{props.data.name}</h1>
//         <h2>Track number {props.data.trackNumber}</h2>
//         <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.artistId}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
//       </SpotifySelected>
//     </ContentDiv>
//   );
// }
