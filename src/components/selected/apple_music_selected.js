
import React from 'react';
import AppleMusicLogo2 from '../../assets/AppleMusicLogo2.png';
import { ContentDiv, SpotifyDiv, LogoImg, SpotifySelected } from './styledComponents';

//style="width:100%;max-width:660px;overflow:hidden;background:transparent;"

export const AppleMusicSelectedAlbum = (props) => {
  return (
    <ContentDiv>
      <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{width: '100%', 'max-width': '1200px', background:'transparent', overflow: 'hidden'}} src={`https://embed.music.apple.com/us/album/${props.data.id}`}></iframe>
    </ContentDiv>
  );
}
