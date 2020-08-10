import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage" 
          src="/header_logo.png"
          alt="instagram logo"
        />
      </div>
      <h1>HOLA MUNDO</h1>
      <Post />
    </div>
  );
}

export default App;
