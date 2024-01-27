// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE1AWa685SDnvweRfyuZfOBG7QFMZtuZY",
  authDomain: "fire-contact-313ae.firebaseapp.com",
  databaseURL: "https://fire-contact-313ae-default-rtdb.firebaseio.com",
  projectId: "fire-contact-313ae",
  storageBucket: "fire-contact-313ae.appspot.com",
  messagingSenderId: "418932544640",
  appId: "1:418932544640:web:ef3bf7d5b86f14158cc265"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;