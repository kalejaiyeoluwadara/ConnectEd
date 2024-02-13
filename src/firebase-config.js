import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage function

const firebaseConfig = {
  apiKey: "AIzaSyDONQ-M8wYU0xxsWFrm6PCcUTY5ho4pWho",
  authDomain: "connected-70f69.firebaseapp.com",
  projectId: "connected-70f69",
  storageBucket: "connected-70f69.appspot.com",
  messagingSenderId: "246974291635",
  appId: "1:246974291635:web:c431f7409882a2c1fedac6",
  measurementId: "G-SMFPZ78LMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Initialize Firebase Storage
export const storage = getStorage(app); // Initialize Firebase Storage service
