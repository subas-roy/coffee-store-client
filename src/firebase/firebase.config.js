// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEIt_-qwq6mVYYbmp5ON7yimPKruS19fY",
  authDomain: "coffee-store-f3dd3.firebaseapp.com",
  projectId: "coffee-store-f3dd3",
  storageBucket: "coffee-store-f3dd3.appspot.com",
  messagingSenderId: "384260484892",
  appId: "1:384260484892:web:049fec31ff9eaa589814d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;