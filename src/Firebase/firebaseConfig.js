import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTVt9aTZCfFY9_BR45BwQxZlbGI4QVu9s",
  authDomain: "olchauz-clone.firebaseapp.com",
  projectId: "olchauz-clone",
  storageBucket: "olchauz-clone.appspot.com",
  messagingSenderId: "16216877910",
  appId: "1:16216877910:web:084c5c20ea38f111cc44f7",
};

const app = initializeApp(firebaseConfig);
console.log(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
