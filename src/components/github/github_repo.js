import React from 'react';
import { GithubMetrics, ItemDiv } from './styledComponents';
const GithubRepo = ({ id, onSelectContent, owner, language, name, description, watchers, stargazers, forks, issues}) => {

  return (
      <ItemDiv onClick={() => onSelectContent('github-repo',{id, owner, language, name, description})}>
        <div>
          <h2>{name}</h2>
          <br></br>
          <h3>{language}</h3>
        </div>
        <GithubMetrics>
          <h4>Stars: {stargazers}</h4>
          <h4>Forks: {forks}</h4>
          <h4>Issues: {issues}</h4>
          <h4>Watchers: {watchers}</h4>
        </GithubMetrics>
      </ItemDiv>
  );
};

export default GithubRepo;
