import React, { Component } from 'react';
import axios from 'axios';
import VimeoVideo from './daily_motion_video';
import VimeoLogo from '../../assets/VimeoLogo.png';

class DailyMotionContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
    }

    this.getContent = this.getContent.bind(this);
  }

  renderVideos() {
    const items = this.state.content.data.list.slice(0,4).map( item => {
      return <VimeoVideo
                onSelectContent={this.state.onSelectContent}
                channel={item.channel}
                imageUrl={item.thumbnail_360_url}
                id={item.id}
                key={item.id}
                name={item.title}
                ownerId={item.owner}
                embed={item.embed_html}
              />;
    });
    return items;
  }

  getContent(searchTerm) {
    axios.get(`https://api.dailymotion.com/videos?search=${searchTerm}&fields=thumbnail_360_url,embed_html,title,owner,id,channel`)
    .then(content => { console.warn('DailyMotion', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({prevSearchTerm: searchTerm}));
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

export default DailyMotionContent;
