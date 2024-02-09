// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6710a.firebaseapp.com",
  projectId: "mern-blog-6710a",
  storageBucket: "mern-blog-6710a.appspot.com",
  messagingSenderId: "438607773265",
  appId: "1:438607773265:web:126a3ae9ee37ec94c88270"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
