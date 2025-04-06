import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALQY59MGuKuwt0GvwqGp35wYukcwEG68I",
  authDomain: "premium-access-15074.firebaseapp.com",
  projectId: "premium-access-15074",
  storageBucket: "premium-access-15074.firebasestorage.app",
  messagingSenderId: "82224189656",
  appId: "1:82224189656:web:635247d0e387246bba87ad",
  measurementId: "G-R599D7LVGX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
