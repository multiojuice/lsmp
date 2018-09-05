import React from 'react';

const SpotifyAlbum = ({ id, imageUrl, artistLink, artistName, artistId, albumLink, albumName, onSelectContent}) => {

  return (
      <div onClick={() => onSelectContent('spotify',{id, imageUrl, artistName, artistId, albumLink})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyAlbum;
