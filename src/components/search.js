import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search-bar">
          <form className="search-form">
              <input type="text" className="searchinput" placeholder={this.props.placeholder} /> 
        <button type="button" className="submit-button">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default Search;
