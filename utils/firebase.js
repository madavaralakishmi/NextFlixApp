// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4kLNFGUjQhSexlCBC7xl38P4p0TA5Tg",
  authDomain: "nextflixgpt-13d0d.firebaseapp.com",
  projectId: "nextflixgpt-13d0d",
  storageBucket: "nextflixgpt-13d0d.firebasestorage.app",
  messagingSenderId: "565883825009",
  appId: "1:565883825009:web:458ce43922afe8300de4d0",
  measurementId: "G-NJ83S8NWK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();