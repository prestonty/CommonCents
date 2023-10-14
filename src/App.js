import React, { useRef, useState } from 'react';
import "./App.css";

import SignIn from './pages/home.js';
import useFetch from './utils/useFetch.js';
import useCategory from './utils/useCategory.js';

import {auth} from './config/firebase.js';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

    const [user] = useAuthState(auth);
    
    return (
      <div className="App">
        <h1>
          {useCategory('tim hortons')}
        </h1>
      </div>);
}

export default App;
