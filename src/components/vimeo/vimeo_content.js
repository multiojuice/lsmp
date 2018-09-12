import React, { Component } from 'react';
import axios from 'axios';
import VimeoVideo from './vimeo_video';
import VimeoLogo from '../../assets/VimeoLogo.png';

const ACCESS_TOKEN = '0c9de60ed26319d172042037ae22195e';

class VimeoContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
    }

    this.getContent = this.getContent.bind(this);
  }

  // componentDidMount() {
  //   axios.post(`https://api.vimeo.com/oauth/authorize/client?grant_type=client_credentials`, {},  {
  //     headers: {
  //       Authorization: 'basic ' + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  //     }
  //   }).then(content => console.warn('auth response', content));
  // }

  renderVideos() {
    const items = this.state.content.data.data.map( item => {
      return <VimeoVideo
                onSelectContent={this.state.onSelectContent}
                embed={item.embed}
                link={item.link}
                name={item.name}
                imageUrl={item.pictures.sizes[2].link}
                userName={item.user.name}
              />;
    });
    return items;
  }

  getContent(searchTerm) {
    axios.get(`https://api.vimeo.com/videos?query=${searchTerm}&per_page=4`, { headers: { Authorization: 'Bearer ' + ACCESS_TOKEN } })
    .then(content => { console.warn('Vimeo', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({prevSearchTerm: searchTerm}));
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={VimeoLogo} />
          </div>
        </div>
      );

      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={VimeoLogo} />
          </div>
          {this.renderVideos()}
        </div>
      );

    switch (this.state.loadContentType) {
      case 'item':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={VimeoLogo} />
            </div>
            {this.renderVideos()}
          </div>
        );
    }
  }
};

export default VimeoContent;
