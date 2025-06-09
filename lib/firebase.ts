// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuO9cQyRwTbXRlRxkDlj2-QXaW6Lc6tQY",
  authDomain: "agrimarket-791d4.firebaseapp.com",
  projectId: "agrimarket-791d4",
  storageBucket: "agrimarket-791d4.appspot.com",
  messagingSenderId: "1099232737739",
  appId: "1:1099232737739:web:488a8f6eae39b1c4379e4e",
};

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);

// Ekspor Firestore
export const db = getFirestore(app);

// Ekspor Authentication
export const auth = getAuth(app);


