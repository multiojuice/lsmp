import React from 'react';

const GithubRepo = ({ id, onSelectContent, owner, language, name, description, watchers, stargazers, forks, issues}) => {

  return (
      <div onClick={() => onSelectContent('github-repo',{id, owner, language, name, description})} className='github-item-div'>
        <div>
          <h2>{name}</h2>
          <br></br>
          <h3>{language}</h3>
        </div>
        <div className='github-metrics'>
          <h4>Stars: {stargazers}</h4>
          <h4>Forks: {forks}</h4>
          <h4>Issues: {issues}</h4>
          <h4>Watchers: {watchers}</h4>
        </div>

      </div>
  );
};

export default GithubRepo;
