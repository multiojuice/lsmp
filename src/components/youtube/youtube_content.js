import React from 'react';
import YoutubeItem from './youtube_item';
import YoutubeLogo from '../../assets/YoutubeLogo.png';
import { LogoImg } from './styledComponents'

const YoutubeContent = (props) => {

  const videoItems = props.videos.slice(0,4).map((video) => {
    return (<YoutubeItem
      onSelectContent={props.onSelectContent}
      key={video.etag}
      video={video} />
    );
  });

  return (
    <div>
      <div>
        <LogoImg src={YoutubeLogo} />
      </div>
      {videoItems}
    </div>
  );
};

export default YoutubeContent;
