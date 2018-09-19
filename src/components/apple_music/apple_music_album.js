import React from 'react';
import { ArtworkImage, ItemDiv } from './styledComponents';
const AppleMusicAlbum = ({ id, imageUrl, artistName, albumLink, albumName, onSelectContent}) => {

  imageUrl = imageUrl.slice(0, -14);
  imageUrl = `${imageUrl}300x300bb.jpeg`;

  return (
      <ItemDiv onClick={() => onSelectContent('apple-album',{id, imageUrl, artistName, albumLink})}>
        <ArtworkImage src={imageUrl}/>
      </ItemDiv>
  );
};

export default AppleMusicAlbum;
