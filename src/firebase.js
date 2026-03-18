import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2eNC-a1amzdWnJaJ4GcsVSYFqcZYHhY",
  authDomain: "lovediary-87f85.firebaseapp.com",
  projectId: "lovediary-87f85",
  storageBucket: "lovediary-87f85.firebasestorage.app",
  messagingSenderId: "111743577405",
  appId: "1:111743577405:web:39ff44f314ce6c1a596954",
  measurementId: "G-YS8NSNVRB4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);