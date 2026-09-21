import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKWVjJHaOwP_UH7azpBwAPzAe4YWisirc",
  authDomain: "contatoapp-e652c.firebaseapp.com",
  projectId: "contatoapp-e652c",
  storageBucket: "contatoapp-e652c.firebasestorage.app",
  messagingSenderId: "464704884473",
  appId: "1:464704884473:web:b9010b8534abf5a2049c28"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);