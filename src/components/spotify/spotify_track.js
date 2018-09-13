import React from 'react';
import { ItemDiv, ArtworkImage } from './styledComponents';

const SpotifyTrack = ({ id, imageUrl, onSelectContent, name, albumId, albumName, artistId, trackNumber}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-track',{id, imageUrl, name, albumId, artistId, albumName, trackNumber})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default SpotifyTrack;
