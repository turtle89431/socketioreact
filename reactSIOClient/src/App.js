import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mydata:null
    }
    this.socket = SocketIOClient('http://localhost:8000');
  }
  render() {
    this.socket.on('hello',(data)=>{
      this.setState( {
        mydata: data.message
      })
      console.log(data);
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Walter Socket.io React</h2>
        </div>
        <p className="App-intro">
          {this.state.mydata.message}
        </p>
      </div>
    );
  }
}

export default App;
