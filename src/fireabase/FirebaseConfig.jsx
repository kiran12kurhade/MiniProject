// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-lg2W9qPs8dHEFh1YfL7y1QzkgbtwQmM",
  authDomain: "healthify-31649.firebaseapp.com",
  projectId: "healthify-31649",
  storageBucket: "healthify-31649.appspot.com",
  messagingSenderId: "916600623806",
  appId: "1:916600623806:web:138ec60f3fd2c2c0d1c4ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}