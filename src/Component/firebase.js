import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMCYrPfbZaCMMlzgKHSjDSUigL0P1OeyQ",
  authDomain: "codeclash-8824c.firebaseapp.com",
  projectId: "codeclash-8824c",
  storageBucket: "codeclash-8824c.firebasestorage.app",
  messagingSenderId: "853462668312",
  appId: "1:853462668312:web:dc33594c5d4a6c88c75f6d",
  measurementId: "G-81TEG0F1TT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);