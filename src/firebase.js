// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgPBt6UFQrKc6FidpKcuurb7fAAZ2fDXA",
  authDomain: "test-ee10f.firebaseapp.com",
  projectId: "test-ee10f",
  storageBucket: "test-ee10f.appspot.com",
  messagingSenderId: "890234150093",
  appId: "1:890234150093:web:889746af8fe8fdb4891d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}