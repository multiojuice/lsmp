import React from 'react';
import { ItemDiv, ArtworkImage } from './styledComponents';
const SpotifyAlbum = ({ id, imageUrl, artistLink, artistName, artistId, albumLink, albumName, onSelectContent}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-album',{id, imageUrl, artistName, artistId, albumLink})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default SpotifyAlbum;
