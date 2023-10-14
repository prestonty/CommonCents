import React, { useRef, useState } from 'react';
import "./App.css";

import SignIn from './pages/home.js';
import GetCategory from './config/cohere.js';

import {auth} from './config/firebase.js';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

    const [user] = useAuthState(auth);

    return (
      <div className="App">
            <GetCategory item = 'Hack' />
            <SignIn/>
            { user ? <GetCategory item = "Hack the Valley" /> : <SignIn/> }
    </div>);
}

export default App;
