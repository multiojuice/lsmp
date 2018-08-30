import React from 'react';

const GithubRepo = ({ id, onSelectContent, owner, language, name, description}) => {

  return (
      <div onClick={() => onSelectContent('github-repo',{id, owner, language, name, description})} className='github-item-div'>
        <img height='100px' src={owner.avatar_url}/>
        <h4>{name}</h4>
        <p width='200px'>{description}</p>
      </div>
  );
};

export default GithubRepo;
