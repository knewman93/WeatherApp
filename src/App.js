import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componets/NavBar';
import Body from './Componets/Body';

const weather = require("./weatherapp.js");

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
    </div>
  );
}
export default App;
