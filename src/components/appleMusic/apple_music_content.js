import React, { Component } from 'react';
import axios from 'axios';
import AppleMusicLogo from '../../assets/AppleMusicLogo.svg';

class AppleMusicContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
    }

    this.getContent = this.getContent.bind(this);
  }

  getContent(searchTerm) {
    axios.get(`https://api.music.apple.com/v1/catalog/us/search?term=${searchTerm}&types=${searchType}&limit=4`, { headers: { Authorization: 'Bearer ' + ACCESS_TOKEN } })
    .then(content => { console.warn('apple music', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({isSignedIn: false, prevSearchTerm: searchTerm}));
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='soundcloud-logo' src={AppleMusicLogo} />
          </div>
        </div>
      );

    return (
      <div>
        <div style={{width: '100%'}}>
          <img className='soundcloud-logo' src={AppleMusicLogo} />
        </div>
      </div>
    );
  }

};

export default AppleMusicContent;
