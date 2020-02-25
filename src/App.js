import React from 'react';
import logo from './logo.svg';
import Navbar from './Componets/Navbar';
import NavBarButton from  './Componets/NavBarButton';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <NavBarButton/>
      <button>Hello</button>
    </div>
  );
}

export default App;
