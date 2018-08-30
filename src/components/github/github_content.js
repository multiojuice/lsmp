import React, { Component } from 'react';
import axios from 'axios';
import GithubItem from './github_item';
import GithubLogo from '../../assets/GithubLogo.png'

class GithubContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent
    }

    this.getContent = this.getContent.bind(this);
  }

  componentDidUpdate() {
    if(this.props.searchTerm) {
      this.getContent(this.props.searchTerm, this.props.searchType);
    }
  }

  getContent(searchTerm, searchType) {
    axios.get(`https://api.github.com/search/${searchType}?q=${searchTerm}`)
    .then(content => { console.log('in getContent', content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  renderItems() {
    const items = this.state.content.data.items.slice(0,6).map(item => {
      return <GithubItem
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

  render() {

    if (!this.state.content) {
      console.warn(this.state)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='github-logo' src={GithubLogo} />
          </div>
        </div>
      );
    }
    return (
      <div className='full-height'>
        <div style={{width: '100%'}}>
          <img className='github-logo' src={GithubLogo} />
        </div>
        <div className='github-item-wrapper'>
          {this.renderItems()}
        </div>
      </div>
    )
  }

};

export default GithubContent;
