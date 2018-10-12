import React, { Component } from 'react';
import {CheeseList} from './components/cheese-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <CheeseList cheeses={['cheddar', 'swiss']} />
      </div>
    );
  }
}

export default App;
