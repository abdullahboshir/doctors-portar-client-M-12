// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};


// const firebaseConfig = {
//   apiKey: "AIzaSyAxhITEo51Q9JvPwwhcY76y-5dzdISpW-U",
//   authDomain: "doctors-portal-96c83.firebaseapp.com",
//   projectId: "doctors-portal-96c83",
//   storageBucket: "doctors-portal-96c83.appspot.com",
//   messagingSenderId: "265249908307",
//   appId: "1:265249908307:web:0befb8c8f3ce7edfa248a6"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;