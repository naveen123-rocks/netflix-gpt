// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDATmYnHrIa_XyBj6yNyB0__0sHHWkdDd8",
  authDomain: "netflix-cube.firebaseapp.com",
  projectId: "netflix-cube",
  storageBucket: "netflix-cube.appspot.com",
  messagingSenderId: "563112347072",
  appId: "1:563112347072:web:d0628fcb0de819e8e5b425",
  measurementId: "G-89RSSBZ2MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth();