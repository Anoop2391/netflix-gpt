// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtrZMt7Y96xswoF4oN7MG86_tVYuElepM",
  authDomain: "netflixgpt-eee44.firebaseapp.com",
  projectId: "netflixgpt-eee44",
  storageBucket: "netflixgpt-eee44.firebasestorage.app",
  messagingSenderId: "806212362713",
  appId: "1:806212362713:web:5ed08a242d654d2f7e39c8",
  measurementId: "G-KN9CZ8CVDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
