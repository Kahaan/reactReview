import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}

  }

  click(event){
    event.preventDefault()
    this.setState({count: this.state.count + 1})
  }

  reset(event){
    event.preventDefault()
    this.setState({count: 0})
  }

  render() {
    return (
      <div className="App">
        {this.state.count} <br />
      <button onClick={this.click.bind(this)}>+</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default App;
