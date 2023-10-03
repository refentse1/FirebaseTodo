// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZa9Zvjf9UobqYHA9l5aQpP0JzdhurpNA",
  authDomain: "react-native-bf7c3.firebaseapp.com",
  projectId: "react-native-bf7c3",
  storageBucket: "react-native-bf7c3.appspot.com",
  messagingSenderId: "911477743646",
  appId: "1:911477743646:web:74f33b4af683d33729ce0f",
  measurementId: "G-0ELGKBGJDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);