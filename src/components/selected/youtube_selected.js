import React from 'react';
import YoutubeLogo from '../../assets/YoutubeLogo.png';
import { ContentDiv, YoutubeDiv, LogoImg } from './styledComponents';

export const YoutubeSelectedVideo = (props) => {
  return (
    <ContentDiv>
      <YoutubeDiv>
        <LogoImg src={YoutubeLogo} />
        <h3>{props.data.snippet.title}</h3>
        <p>{props.data.snippet.description}</p>
      </YoutubeDiv>
        <iframe className='youtube-video-player' src={`https://youtube.com/embed/${props.data.id.videoId}`} />
    </ContentDiv>
  );
}
