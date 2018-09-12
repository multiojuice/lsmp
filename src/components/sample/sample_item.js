import React from 'react';

const SampleItem = ({ onSelectContent}) => {

  return (
      <div onClick={() => onSelectContent('sample-item',{})} className='spotify-item-div'>
        <img src={''}/>
      </div>
  );
};

export default SampleItem;
