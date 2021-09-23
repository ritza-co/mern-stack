import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import SubmitJob from './components/submitJob';
import ViewJobs from './components/viewJobs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Job Board</h3>
      </header>
      <SubmitJob />
      <ViewJobs />
    </div>
  );
}

export default App;
