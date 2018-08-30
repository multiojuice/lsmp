import React from 'react';

const GithubUser = ({ id, onSelectContent, avatar_url, score, name}) => {

  return (
      <div onClick={() => onSelectContent('github-user',{id, avatar_url, score, name})} className='github-item-div'>
        <img height='100px' src={avatar_url}/>
        <h4>{name}</h4>
        <p width='200px'>{score}</p>
      </div>
  );
};

export default GithubUser;
