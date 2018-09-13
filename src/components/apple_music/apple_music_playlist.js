import React from 'react';

const AppleMusicPlaylist = ({ id, imageUrl, curatorName, playlistLink, name, onSelectContent, description}) => {

  imageUrl = imageUrl.slice(0, -14);
  imageUrl = `${imageUrl}300x300bb.jpeg`;

  return (
      <div onClick={() => onSelectContent('spotify-album',{id, imageUrl, curatorName, name, playlistLink, description})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default AppleMusicPlaylist;
