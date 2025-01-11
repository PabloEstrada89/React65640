import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0p4-qNZBa81q5vinmXpboynD3HxkFlQg",
  authDomain: "react65640.firebaseapp.com",
  projectId: "react65640",
  storageBucket: "react65640.firebasestorage.app",
  messagingSenderId: "1033277986928",
  appId: "1:1033277986928:web:7782c1e66a0e93e8993cb5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore ( app )