import React from 'react';

const SpotifyArtist = ({ id, imageUrl, artistLink, onSelectContent, name, popularity, followers, genre}) => {

  return (
      <div onClick={() => onSelectContent('spotify-artist',{id, imageUrl, name, followers, popularity, genre, artistLink})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyArtist;
