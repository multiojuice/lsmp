import React from 'react';
import { ItemDiv } from './styledComponents';

const YoutubeItem = ({video, onSelectContent}) => {

  const videoImage = video.snippet.thumbnails.medium.url;

  return (
    <ItemDiv onClick={() => onSelectContent('youtube', video)}>
      <div>
        <img src={videoImage}/>
      </div>
    </ItemDiv>
  );
};

export default YoutubeItem;
