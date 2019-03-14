import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Alert, Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import FormExample from './components/FormExample';
import NavExample from './components/NavExample';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavExample />
        <h1>LogJam</h1>
        
        <Alert theme="primary">
        Get Unstuck!
      </Alert>
      <h2>When projects break down use logjam to get unstuck!</h2>
      Add Team Member
      <FormExample />
      Add Team Member # 2
      <FormExample />
      <Button>Submit</Button>
      <Button theme="danger">Cancel</Button>
      </div>
    );
  }
}

export default App;
