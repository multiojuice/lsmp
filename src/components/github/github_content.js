import React, { Component } from 'react';
import axios from 'axios';
import GithubRepo from './github_repo';
import GithubLogo from '../../assets/GithubLogo.png'
import GithubUser from './github_user'

class GithubContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelectContent: this.props.onSelectContent
    }

    this.getContent = this.getContent.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.searchTerm) {
      if(this.props.searchType !== prevProps.searchType || this.props.searchTerm !== prevProps.searchTerm) {
        this.getContent(this.props.searchTerm, this.props.searchType);
      }
    }
  }

  getContent(searchTerm, searchType) {
    axios.get(`https://api.github.com/search/${searchType}?q=${searchTerm}`)
    .then(content => { console.log('in getContent', content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  renderRepos() {
    const items = this.state.content.data.items.slice(0,6).map(item => {
      return <GithubRepo
              owner={item.owner}
              language={item.language}
              name={item.name}
              description={item.description}
              key={item.id}
              id={item.id}
              onSelectContent={this.state.onSelectContent}
              />;
    })
    return items;
  }

  renderUsers() {
    const items = this.state.content.data.items.slice(0,6).map(item => {
      return <GithubUser
                id={item.id}
                key={item.id}
                avatar_url={item.avatar_url}
                score={item.score}
                onSelectContent={this.state.onSelectContent}
                name={item.login}
                />
    })
    return items;
  }

  render() {

    if (!this.state.content) {
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='github-logo' src={GithubLogo} />
          </div>
        </div>
      );
    }

    let items = null;

    switch (this.props.searchType) {
      case 'repositories':
        items = this.renderRepos();
        break;
      case 'users':
        items = this.renderUsers();
        break;
    }

    return (
      <div className='full-height'>
        <div style={{width: '100%'}}>
          <img className='github-logo' src={GithubLogo} />
        </div>
        <div className='github-item-wrapper'>
          {items}
        </div>
      </div>
    )
  }

};

export default GithubContent;
