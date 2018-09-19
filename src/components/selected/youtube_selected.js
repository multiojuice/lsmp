import React from 'react';
import YoutubeLogo from '../../assets/YoutubeLogo.png';
import { ContentDiv, YoutubeDiv, LogoImg } from './styledComponents';

export const YoutubeSelectedVideo = (props) => {
  return (
    <ContentDiv>
        <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" allowFullScreen sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{width: '100%', 'max-width': '1200px', background:'transparent', overflow: 'hidden'}} src={`https://youtube.com/embed/${props.data.id.videoId}`} />
    </ContentDiv>
  );
}
