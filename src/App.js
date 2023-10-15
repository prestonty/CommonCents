import React, { useRef, useState } from 'react';
import "./App.css";
import "./components/styles/chart.css"

import SignIn from './pages/home.js';
import useFetch from './utils/useFetch.js';
import useCategory from './utils/useCategory.js';
import SemiAnnualSpending from './components/graphs/SemiAnnualSpending.js';

import {auth} from './config/firebase.js';

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

    const [user] = useAuthState(auth);

    const data = [
      { name: "May", val: 5000, color: "#00715B" },
      { name: "Jun", val: 5800, color: "#D9893A" },
      { name: "Jul", val: 8100, color: "#D93A3A" },
      { name: "Aug", val: 9600, color: "#D93A3A" },
      { name: "Sep", val: 5400, color: "#D9893A" },
      { name: "Oct", val: 3700, color: "#00715B" },
    ]
    
    return (
      <div className="App">
        <h1>
          {useCategory('tim hortons')}
        </h1>
        <div className="chart">
          <SemiAnnualSpending data={data} />
        </div>
      </div>);
}

export default App;
