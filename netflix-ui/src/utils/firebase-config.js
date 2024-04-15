import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAer3Ebhelzn33ziXwIl-x5-XhtUoEXjDY",
  authDomain: "netflix-ui-64b4b.firebaseapp.com",
  projectId: "netflix-ui-64b4b",
  storageBucket: "netflix-ui-64b4b.appspot.com",
  messagingSenderId: "17468058093",
  appId: "1:17468058093:web:c11a143a197749a8b31fe4",
  measurementId: "G-1VMRDQFCS9",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
