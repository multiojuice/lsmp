import React from 'react';
import { ContentDiv, SoundcloudDiv } from './styledComponents';

export const SoundcloudSelectedArtist = (props) => {
  return(
    <ContentDiv>
      <iframe width="50%" height="100%" scrolling="no" frameBorder="no"
        src={`https://w.soundcloud.com/player/?url=${props.data.userLink}&amp;show_user=false`}>
      </iframe>
      <SoundcloudDiv>
        <img src={props.data.imageUrl} />
        <h2 href={props.data.userLink}>{props.data.userName}</h2>
        <p>{props.data.description}</p>
      </SoundcloudDiv>
    </ContentDiv>
  );
}
