import React from 'react';
import { ContentDiv } from './styledComponents';

export const GithubSelectedRepo = (props) => {
  return (
    <ContentDiv>
      <h1>{props.data.name}</h1>
      <h2>{props.data.owner.login}</h2>
      <h3>{props.data.language}</h3>
      <p>{props.data.description}</p>
    </ContentDiv>
  );
}

export const GithubSelectedUser = (props) => {
  return (
    <ContentDiv>
      <h1>{props.data.name}</h1>
      <h2>{props.data.score}</h2>
      <h3>{props.data.avatar_url}</h3>
    </ContentDiv>
  );
}
