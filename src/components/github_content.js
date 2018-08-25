import React, { Component } from 'react';
import axios from 'axios';

class GithubContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : {
        avatar_url: null
      },
      prevSearchTerm: this.props.searchTerm
    }

    this.getContent = this.getContent.bind(this);
  }

  getContent(searchTerm) {
    axios.get(`https://api.github.com/users/${searchTerm}`)
    .then(content => { console.log(content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) {
      this.getContent(this.props.searchTerm);
    }

    if (this.state.content.avatar_url === null) {
      console.warn('in null statement')
      return <div />;
    }
    return (
      <div>
        <img src={this.state.content.avatar_url} />
      </div>
    )
  }

};

export default GithubContent;
