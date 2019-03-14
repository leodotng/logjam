import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>LogJam</h1>
        
        <Alert theme="primary">
        Get Unstuck!
      </Alert>
      <h2>When projects break down use logjam to get unstuck!</h2>
      </div>
    );
  }
}

export default App;
