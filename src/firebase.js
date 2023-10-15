// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ud8izEWJTq00Ou64MeQk1WfgQlkA3QM",
  authDomain: "ufotkre.firebaseapp.com",
  projectId: "ufotkre",
  storageBucket: "ufotkre.appspot.com",
  messagingSenderId: "183461154556",
  appId: "1:183461154556:web:09eedf3e47656575ac5179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();