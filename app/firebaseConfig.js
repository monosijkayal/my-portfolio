// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSjLYc8uWkUKp7e55WI-yC2UrsB2wWe5k",
  authDomain: "monosijkayal-6935c.firebaseapp.com",
  projectId: "monosijkayal-6935c",
  storageBucket: "monosijkayal-6935c.firebasestorage.app",
  messagingSenderId: "584300081314",
  appId: "1:584300081314:web:a28879eb09291aa48ca7fb",
  measurementId: "G-EM988KW7BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };

