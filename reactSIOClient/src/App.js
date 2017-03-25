import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mydata:{},
      test:[1,2,3]
    }
    this.socket = SocketIOClient('http://buttecte.org:8000');
  }
  render() {
    this.socket.on('hello',(data)=>{
      this.setState( {
        mydata: data
      })
      this.setState({test:[4,5,8]})
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Walter Winser gitSocket.io React</h2>
        </div>
        <p className="App-intro">
          {this.state.mydata.message}
        </p>
      </div>
    );
  }
}

export default App;
