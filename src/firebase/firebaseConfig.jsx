import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBW2L06hx5YGsfrjOVAVWmV7dJRqcV4A-8",
  authDomain: "test-project-81e25.firebaseapp.com",
  projectId: "test-project-81e25",
  storageBucket: "test-project-81e25.appspot.com",
  messagingSenderId: "485645870153",
  appId: "1:485645870153:web:57a6eac503d66e10880b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth()