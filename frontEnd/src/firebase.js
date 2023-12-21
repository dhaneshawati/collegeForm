// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdC6e82Yxf93Ik63w4Qre9z_WOwWdORIQ",
  authDomain: "collegestudents-f6d43.firebaseapp.com",
  projectId: "collegestudents-f6d43",
  storageBucket: "collegestudents-f6d43.appspot.com",
  messagingSenderId: "80176696393",
  appId: "1:80176696393:web:b65679b1fed463c8880398",
  measurementId: "G-WVSJH844MH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = getFirestore(app);
export default app;
