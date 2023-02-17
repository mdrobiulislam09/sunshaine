// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBDw3NxkDzj-9vnuWsHDH6i-s4WDQ9V0w",
  authDomain: "sunshine-ffb1f.firebaseapp.com",
  projectId: "sunshine-ffb1f",
  storageBucket: "sunshine-ffb1f.appspot.com",
  messagingSenderId: "557568618529",
  appId: "1:557568618529:web:c1f0d392dd8e9777fd3360",
  measurementId: "G-28KVBYW3MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;