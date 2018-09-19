import React from 'react';
import { ItemDiv, ProfImg } from './styledComponents';
const SoundcloudItem = ({ id, imageUrl, followersCount, onSelectContent, userLink, userName, trackCount, description}) => {

imageUrl = imageUrl.slice(0, -9);
imageUrl = `${imageUrl}t200x200.jpg`;

  return (
      <ItemDiv onClick={() => onSelectContent('soundcloud', {userLink, userName, imageUrl, id, description})} >
        <ProfImg src={imageUrl}/>
      </ItemDiv>
  );
};

export default SoundcloudItem;
