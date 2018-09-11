import React from 'react';

const AppleMusicPlaylist = ({ id, imageUrl, artistName, albumLink, albumName, onSelectContent}) => {

  imageUrl = imageUrl.slice(0, -14);
  imageUrl = `${imageUrl}300x300bb.jpeg`;

  return (
      <div onClick={() => onSelectContent('spotify-album',{id, imageUrl, artistName, albumLink})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default AppleMusicPlaylist;
