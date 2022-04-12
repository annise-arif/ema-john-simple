// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANf9Zd9zwc5X9TrSIUdXl3h2FX-_eS9pc",
  authDomain: "ema-john-simple-46838.firebaseapp.com",
  projectId: "ema-john-simple-46838",
  storageBucket: "ema-john-simple-46838.appspot.com",
  messagingSenderId: "444011458300",
  appId: "1:444011458300:web:3da61067e57a7a78c5b179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;