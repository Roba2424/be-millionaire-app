import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnP2YeOUfzs6BnBsoNR8x_tK1kXhdUR_o",
  authDomain: "react-be-millionaire.firebaseapp.com",
  projectId: "react-be-millionaire",
  storageBucket: "react-be-millionaire.firebasestorage.app",
  messagingSenderId: "267786466457",
  appId: "1:267786466457:web:5fbba48bf59080037fb408",
  measurementId: "G-HH4KED9F1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
