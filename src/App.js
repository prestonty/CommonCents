import React, { useRef, useState } from 'react';
import SignIn from './config/firebase.js'
import "./App.css";

function App() {
    return (
      <div className="App">
            <h1>
                <SignIn/>
            </h1>
            <Dropbox />
    </div>);
}

export default App;
