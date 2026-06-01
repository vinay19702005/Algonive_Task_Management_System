// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsX7wqEQf5vGy0xLkioIANbrpwP2UwA4",
  authDomain: "algonive-task-management.firebaseapp.com",
  projectId: "algonive-task-management",
  storageBucket: "algonive-task-management.firebasestorage.app",
  messagingSenderId: "227662099446",
  appId: "1:227662099446:web:2d82b41edc510831178dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};