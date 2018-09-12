import React from 'react';

const SampleItem = ({ onSelectContent, embed, link, name, imageUrl, userName}) => {

  return (
      <div onClick={() => onSelectContent('vimeo-video',{imageUrl, embed})} className='spotify-item-div'>
        <img src={imageUrl}/>
        <p>{userName}</p>
      </div>
  );
};

export default SampleItem;
