import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let {number,add,sub} = this.props;
    return (
      <div className="App">
        <button onClick={add}>ADD</button>
        <div>{number}</div>
        <button onClick={sub}>SUB</button>
      </div>
    );
  }
}

export default App;
