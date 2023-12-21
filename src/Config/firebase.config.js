// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiTefN2iu3Ytw4SSv1kv61dvL9QX4dmzY",
  authDomain: "task-management-3d313.firebaseapp.com",
  projectId: "task-management-3d313",
  storageBucket: "task-management-3d313.appspot.com",
  messagingSenderId: "329915335100",
  appId: "1:329915335100:web:5aca271ce34ec211f6abb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app