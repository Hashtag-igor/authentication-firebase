import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBlltUPZ5AWu7kBGvFhUncRuk6F1cWSWAA",
  authDomain: "crud-1d86c.firebaseapp.com",
  projectId: "crud-1d86c",
  storageBucket: "crud-1d86c.appspot.com",
  messagingSenderId: "143399453543",
  appId: "1:143399453543:web:cc6452c5696a2acd41e5c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)