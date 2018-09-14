import SoundCloudAPI from 'soundcloud';
import React, { Component } from 'react';
import axios from 'axios';
import SoundCloudItem from './soundcloud_item';
import SoundcloudLogo from '../../assets/SoundcloudLogo.png';
import { LogoImg } from './styledComponents';

let CLIENT_ID = 'NZtb1cCBbHFHV67f1Fp9jkGKog0H4StA';

class SoundcloudContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
    }
    SoundCloudAPI.initialize({
      client_id: CLIENT_ID
    });

    this.getContent = this.getContent.bind(this);
  }

  renderItems() {
    return this.state.content.map(item => {
      return <SoundCloudItem
          imageUrl={item.avatar_url}
          followersCount={item.followers_count}
          userLink={item.permalink_url}
          userName={item.username}
          id={item.id}
          key={item.id}
          trackCount={item.track_count}
          onSelectContent={this.state.onSelectContent}
          description={item.description}
        />
    })
  }

  getContent(searchTerm) {
    SoundCloudAPI.get('/users', {
      q: searchTerm,
      limit: 5
    }).then( content => {
      this.setState({prevSearchTerm: searchTerm, content})
    });
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <LogoImg src={SoundcloudLogo} />
          </div>
        </div>
      );

    return (
      <div>
        <div style={{width: '100%'}}>
          <LogoImg src={SoundcloudLogo} />
        </div>
        {this.renderItems()}
      </div>
    );
  }

};

export default SoundcloudContent;
