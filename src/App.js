import "./App.css";
import SignIn from './pages/home.js';

import { initializeApp } from "firebase/app";
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

initializeApp({
    apiKey: "AIzaSyDOPvE_BKy77pMtcUpBu3y7IVkiNUSSieY",
    authDomain: "commoncents-6bf69.firebaseapp.com",
    projectId: "commoncents-6bf69",
    storageBucket: "commoncents-6bf69.appspot.com",
    messagingSenderId: "775611183913",
    appId: "1:775611183913:web:0f866c1f1a1f4352483d38"
})

const auth = auth();
const firestore = firestore();
const analytics = analytics();

function App() {
    return (<div className="App">
            <h1>
                <SignIn
                    auth={auth}
                />
            </h1>
        </div>);
}

export default App;
