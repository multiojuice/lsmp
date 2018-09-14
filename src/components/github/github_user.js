import React from 'react';
import { ItemDiv } from './styledComponents';

const GithubUser = ({ id, onSelectContent, avatar_url, score, name}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('github-user',{id, avatar_url, score, name})}>
        <img height='100px' src={avatar_url}/>
        <h4>{name}</h4>
        <p width='200px'>{score}</p>
      </ItemDiv>
  );
};

export default GithubUser;
