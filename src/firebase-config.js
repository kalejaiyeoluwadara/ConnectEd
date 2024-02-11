import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDONQ-M8wYU0xxsWFrm6PCcUTY5ho4pWho",
  authDomain: "connected-70f69.firebaseapp.com",
  projectId: "connected-70f69",
  storageBucket: "connected-70f69.appspot.com",
  messagingSenderId: "246974291635",
  appId: "1:246974291635:web:c431f7409882a2c1fedac6",
  measurementId: "G-SMFPZ78LMS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
