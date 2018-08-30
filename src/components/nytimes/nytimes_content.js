import React, { Component } from 'react';
import axios from 'axios';
import NytimesItem from './nytimes_item';
import NytimesLogo from '../../assets/NytimesLogo.png'

class NytimesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent
    }

    this.getContent = this.getContent.bind(this);
  }

  getContent(searchTerm) {
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
    .then(content => { console.log('in getContent', content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  renderItems() {
    const items = this.state.content.data.items.slice(0,6).map(item => {
      return <NytimesItem
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
    if(this.props.searchTerm !== this.state.prevSearchTerm) {
      this.getContent(this.props.searchTerm);
    }

    if (!this.state.content) {
      return (
        <div>
          <div style={{width: '100%'}}>
            <img src={NytimesLogo} />
          </div>
        </div>
      );
    }
    return (
      <div className='full-height'>
        <div style={{width: '100%'}}>
          <img className='github-logo' src={NytimesLogo} />
        </div>
        <div className='github-item-wrapper'>
          {this.renderItems()}
        </div>
      </div>
    )
  }

};

export default NytimesContent;
