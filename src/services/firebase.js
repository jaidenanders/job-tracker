import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVR8OkUX7G2dg0GVEsulj4SWGsnpAHrLM",
  authDomain: "job-tracker-79913.firebaseapp.com",
  projectId: "job-tracker-79913",
  storageBucket: "job-tracker-79913.firebasestorage.app",
  messagingSenderId: "168108130556",
  appId: "1:168108130556:web:175be3eefda9511f075779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;