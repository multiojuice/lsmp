import React from 'react';
import { ItemDiv, ThumbnailImage } from './styledComponents';
const VimeoVideo = ({ onSelectContent, embed, uri, name, imageUrl, userName}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('vimeo-video',{imageUrl, embed, uri})} >
        <ThumbnailImage src={imageUrl}/>
        <p>{userName}</p>
      </ItemDiv>
  );
};

export default VimeoVideo;
