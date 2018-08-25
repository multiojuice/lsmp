import React from 'react';

const SpotifyItem = ({ imageUrl, artistLink, artistName, albumLink, albumName}) => {

  return (
      <div>
        <a href={albumLink}><img src={imageUrl}/></a>
      </div>
  );
};

export default SpotifyItem;