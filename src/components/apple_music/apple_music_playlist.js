import React from 'react';
import { ArtworkImage, ItemDiv } from './styledComponents';

const AppleMusicPlaylist = ({ id, imageUrl, curatorName, playlistLink, name, onSelectContent, description}) => {

  imageUrl = imageUrl.slice(0, -14);
  imageUrl = `${imageUrl}300x300bb.jpeg`;

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-album',{id, imageUrl, curatorName, name, playlistLink, description})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default AppleMusicPlaylist;
