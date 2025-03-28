// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6u2mB4iy6rKOdj1Nekuu3Elduyyn-g9w",
  authDomain: "navcart-70293.firebaseapp.com",
  projectId: "navcart-70293",
  storageBucket: "navcart-70293.firebasestorage.app",
  messagingSenderId: "179780485963",
  appId: "1:179780485963:web:3861c8d8899e2d730b1ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
