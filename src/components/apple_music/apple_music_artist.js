import React from 'react';
import { ArtworkImage, ItemDiv } from './styledComponents';

const AppleArtistAlbum = ({ id, imageUrl, artistName, albumLink, albumName, onSelectContent}) => {

  imageUrl = imageUrl.slice(0, -14);
  imageUrl = `${imageUrl}300x300bb.jpeg`;

  return (
      <ItemDiv onClick={() => onSelectContent('spotify-album',{id, imageUrl, artistName, albumLink})} >
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default AppleArtistAlbum;
