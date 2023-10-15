import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; 

const app = initializeApp({
    apiKey: "AIzaSyDOPvE_BKy77pMtcUpBu3y7IVkiNUSSieY",
    authDomain: "commoncents-6bf69.firebaseapp.com",
    projectId: "commoncents-6bf69",
    storageBucket: "commoncents-6bf69.appspot.com",
    messagingSenderId: "775611183913",
    appId: "1:775611183913:web:0f866c1f1a1f4352483d38"
})

export const auth = getAuth();
auth.languageCode = 'it';

export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
    'login_hint': 'user@example.com'
    });
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

    
} 

export const db = getFirestore(app); 