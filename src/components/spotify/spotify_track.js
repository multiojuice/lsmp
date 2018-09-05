import React from 'react';

const SpotifyTrack = ({ id, imageUrl, onSelectContent, name, albumId, albumName, artistId, trackNumber}) => {

  return (
      <div onClick={() => onSelectContent('spotify-track',{id, imageUrl, name, albumId, artistId, albumName, trackNumber})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyTrack;
