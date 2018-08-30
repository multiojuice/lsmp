import React, {Component} from 'react';
import PreferencesLogo from '../assets/Preferences.png';
class SearchBar extends Component{

  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.handleClick();
    }
  }

  render() {
    return (
      <div className="search-bar">
        <div className='search-bar-div'>
          <input
            autoFocus="autofocus"
            value={this.state.searchTerm}
            onChange={event => this.onInputChange(event.target.value)}
            onKeyPress={this.handleKeyPress}/>
          <button onClick={() => this.props.handleClick()}>List it!</button>
          <img src={PreferencesLogo} onClick={() => this.props.onSelectContent('preferences', null)} />
        </div>
      </div>
    );
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
