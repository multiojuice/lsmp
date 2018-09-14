import React from 'react';
import { ItemDiv } from './styledComponents';
const SoundcloudItem = ({ id, imageUrl, followersCount, onSelectContent, userLink, userName, trackCount, description}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('soundcloud', {userLink, userName, imageUrl, id, description})} >
        <img src={imageUrl}/>
        <h4>{userName}</h4>
        <p>{`Follower Count: ${followersCount}`} </p>
        <p> {`Track Count: ${trackCount}`}</p>
      </ItemDiv>
  );
};

export default SoundcloudItem;
