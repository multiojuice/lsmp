import React from 'react';
import { ItemDiv, ThumbnailImage } from './styledComponents';
const SampleItem = ({ onSelectContent, embed, id, channel, name, imageUrl, ownerId}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('dailymotion-video',{imageUrl, embed, id})} >
        <ThumbnailImage src={imageUrl}/>
        <p>{name}</p>
      </ItemDiv>
  );
};

export default SampleItem;
