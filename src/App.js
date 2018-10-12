import React, { Component } from 'react';
import CheeseList from './components/cheese-list';
import CheeseSubmit from './components/cheese-submit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CheeseList />
        <CheeseSubmit />
      </div>
    );
  }
}

export default App;
