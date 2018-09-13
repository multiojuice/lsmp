import React from 'react';
import { ItemDiv, ArtworkImage } from './styledComponents';
const SpotifyArtist = ({ id, imageUrl, artistLink, onSelectContent, name, popularity, followers, genre}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-artist',{id, imageUrl, name, followers, popularity, genre, artistLink})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default SpotifyArtist;
