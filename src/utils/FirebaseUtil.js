// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import "firebase/auth"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfv9XNqvcitj0ILAsb1RBt8J3RPtgVKVw",
  authDomain: "sistema-eabc9.firebaseapp.com",
  projectId: "sistema-eabc9",
  storageBucket: "sistema-eabc9.appspot.com",
  messagingSenderId: "292060282929",
  appId: "1:292060282929:web:0d25d2ea7afa528c281510",
  measurementId: "G-F65QPWLHET"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//export const auth = firebase.auth();
export default firebaseApp;
