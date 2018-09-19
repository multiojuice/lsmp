import React, { Component } from 'react';
import axios from 'axios';
import SampleItem from './sample_item';

class SampleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
    }

    this.getContent = this.getContent.bind(this);
  }

  renderItems() {
    const items = this.state.content.items.map( item => {
      return <SampleItem
                onSelectContent={this.state.onSelectContent}
                {/* Additional Properties from content*/}
              />;
    });
    return items;
  }

  getContent(searchTerm) {
    axios.get(`url`, { headers: { Authorization: 'Bearer ' + '' } })
    .then(content => { console.warn('spotify', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({prevSearchTerm: searchTerm}));
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <LogoWrapper>
            <img className='spotify-logo' src={''} />
          </div>
        </div>
      );

    switch (this.state.loadContentType) {
      case 'item':
        return (
          <div>
            <LogoWrapper>
              <img className='spotify-logo' src={''} />
            </div>
            {this.renderItems()}
          </div>
        );
    }
  }
};

export default SpotifyContent;
