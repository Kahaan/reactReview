import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counts from './counts'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0, previous:[]}

  }

  click(event){
    event.preventDefault()
    this.setState({count: this.state.count + 1})
  }

  reset(event){
    event.preventDefault()
    let previous = this.state.previous
    previous.push(this.state.count)
    this.setState({count: 0, previous})
  }

  render() {
    return (
      <div className="App">
        {this.state.count} <br />
        <button onClick={this.click.bind(this)}>+</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        <Counts previous={this.state.previous}/>
      </div>
    );
  }
}

export default App;
