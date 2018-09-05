import React from 'react';

const SpotifyArtist = ({ id, imageUrl, artistLink, onSelectContent, name, popularity, followers, genre}) => {

  return (
      <div onClick={() => onSelectContent('spotify',{id, imageUrl, name, followers})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyArtist;
