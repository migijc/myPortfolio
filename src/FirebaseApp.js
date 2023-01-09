import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhm4TFvCpYA3humkrtfAkropVGUnjImjQ",
  authDomain: "my-portfolio-adc76.firebaseapp.com",
  projectId: "my-portfolio-adc76",
  storageBucket: "my-portfolio-adc76.appspot.com",
  messagingSenderId: "937433688686",
  appId: "1:937433688686:web:110571e505e1d07cf3d47f",
  measurementId: "G-KWYZW96D2G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export default app


