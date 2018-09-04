import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import axios from 'axios';

class App extends Component {
  state = {
    cards: []
  }

componentDidMount() {
  axios.get('https://api.magicthegathering.io/v1/cards')
    .then(res => { 
        const cards = res.data;
        this.setState(cards: cards);
    });
}



  render() {
    return (
      <div className="App">
          <Search  placeholder="Search for a card"
                   buttonText="Submit"/>
      </div>
    );
  }
}

export default App;
