import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk1rABuN3RnIkW14aaQaaV6heAGE_B4o8",
  authDomain: "portfolio-system-a5ab3.firebaseapp.com",
  projectId: "portfolio-system-a5ab3",
  storageBucket: "portfolio-system-a5ab3.firebasestorage.app",
  messagingSenderId: "576190973725",
  appId: "1:576190973725:web:d6cd4b23bf8511a37983f4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;