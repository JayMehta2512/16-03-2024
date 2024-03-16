
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// import { firebase } from 'firebase';
 
const firebaseConfig = {
  apiKey: "AIzaSyC5E9GIzD_4WX-LZd2NVwJqvN6wn_QCDAA",
  authDomain: "myapp-7fa23.firebaseapp.com",
  projectId: "myapp-7fa23",
  storageBucket: "myapp-7fa23.appspot.com",
  messagingSenderId: "413998566475",
  appId: "1:413998566475:web:2ac8d300bc5a642f45d1ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
// export const fs = firebase.firestore();
//  export const storage = firebase.storage();
// server-side Firebase Admin SDK initialization
; 