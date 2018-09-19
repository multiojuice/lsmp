import React from 'react';
import { ContentDiv, SoundcloudDiv } from './styledComponents';

export const SoundcloudSelectedArtist = (props) => {
  return(
    <ContentDiv>
      <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{width: '100%', 'maxWidth': '1200px', background:'transparent', overflow: 'hidden'}}
        src={`https://w.soundcloud.com/player/?url=${props.data.userLink}&amp;show_user=false`}>
      </iframe>
    </ContentDiv>
  );
}
