// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDz8S7Du1G9VqenxGJGqGPtU9n98RPF6Wc",
    authDomain: "testautomation-53481.firebaseapp.com",
    projectId: "testautomation-53481",
    storageBucket: "testautomation-53481.appspot.com",
    messagingSenderId: "117369792017",
    appId: "1:117369792017:web:0b6f42a776d58ed784b3b0",
    measurementId: "G-WDZXZJ2DMH"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
