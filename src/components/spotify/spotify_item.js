import React from 'react';

const SpotifyItem = ({ id, imageUrl, artistLink, artistName, artistId, albumLink, albumName, onSelectContent}) => {

  return (
      <div onClick={() => onSelectContent('spotify',{id, imageUrl, artistName, artistId, albumLink})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyItem;
