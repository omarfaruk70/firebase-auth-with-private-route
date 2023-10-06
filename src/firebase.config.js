// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIGuayKENy8GaH1pSNwHgOoSVJUBHHu4M",
  authDomain: "auth-moha-milon-6289e.firebaseapp.com",
  projectId: "auth-moha-milon-6289e",
  storageBucket: "auth-moha-milon-6289e.appspot.com",
  messagingSenderId: "568739516800",
  appId: "1:568739516800:web:fa0f203e70a04c18427165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;