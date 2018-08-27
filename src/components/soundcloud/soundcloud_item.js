import React from 'react';

const SoundcloudItem = ({ id, imageUrl, followersCount, onSelectContent, userLink, userName, trackCount, description}) => {

  return (
      <div onClick={() => onSelectContent('soundcloud', {userLink, userName, imageUrl, id, description})} className='soundcloud-item-div'>
        <img src={imageUrl}/>
        <h4>{userName}</h4>
        <p>{`Follower Count: ${followersCount}`} </p>
        <p> {`Track Count: ${trackCount}`}</p>
      </div>
  );
};

export default SoundcloudItem;
