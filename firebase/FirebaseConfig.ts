// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ_7pXHx-08kucKAUXZaxjafHoJ86Tf-g",
  authDomain: "agrimarket-3d2c5.firebaseapp.com",
  projectId: "agrimarket-3d2c5",
  storageBucket: "agrimarket-3d2c5.firebasestorage.app",
  messagingSenderId: "373300032534",
  appId: "1:373300032534:web:707f73cb1b0430437ff137",
  measurementId: "G-H7763MK1BL"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);