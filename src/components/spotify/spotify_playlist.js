import React from 'react';

const SpotifyPlaylist = ({ id, imageUrl, onSelectContent, name, trackNumber, owner, collabrative}) => {

  return (
      <div onClick={() => onSelectContent('spotify-playlist',{id, imageUrl, name, owner, collabrative})} className='spotify-item-div'>
        <img src={imageUrl}/>
      </div>
  );
};

export default SpotifyPlaylist;
