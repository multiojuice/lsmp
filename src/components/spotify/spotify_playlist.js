import React from 'react';
import { ItemDiv, ArtworkImage } from './styledComponents';

const SpotifyPlaylist = ({ id, imageUrl, onSelectContent, name, trackNumber, owner, collabrative}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-playlist',{id, imageUrl, name, owner, collabrative})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default SpotifyPlaylist;
