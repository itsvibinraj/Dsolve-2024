// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr0WtSRIeZalKasQmSZCWrUnkHNPTngtU",
  authDomain: "logform-4155a.firebaseapp.com",
  projectId: "logform-4155a",
  storageBucket: "logform-4155a.appspot.com",
  messagingSenderId: "406421015207",
  appId: "1:406421015207:web:2890ba92b5436a2444e982",
  measurementId: "G-RKZPR3CQW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);