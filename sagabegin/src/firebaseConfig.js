//  Initializes the Firebase application
import { initializeApp } from "firebase/app";
// Retrieves the authentication service from Firebase
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //Unique key for your Firebase project, used to authenticate requests.
  apiKey: "AIzaSyB6u2mB4iy6rKOdj1Nekuu3Elduyyn-g9w",
  //Domain where Firebase authentication will be hosted.
  authDomain: "navcart-70293.firebaseapp.com",
  // Unique identifier for your Firebase project.
  projectId: "navcart-70293",
  //Where files (like images) are stored.
  storageBucket: "navcart-70293.firebasestorage.app",
  //ID used for Firebase Cloud Messaging (FCM) (for push notifications).
  messagingSenderId: "179780485963",
  //Unique app identifier required for Firebase services.
  appId: "1:179780485963:web:3861c8d8899e2d730b1ece"
};

 //Initializes the Firebase project using the configuration
const app = initializeApp(firebaseConfig);
//Retrieves the Firebase Authentication service
export const auth = getAuth(app);
