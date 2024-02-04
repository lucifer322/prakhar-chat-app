import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-oiLTBTmuF_fvuWxz5k8-C_NhIBEOeg8",
  authDomain: "chat-app-a6e6b.firebaseapp.com",
  projectId: "chat-app-a6e6b",
  storageBucket: "chat-app-a6e6b.appspot.com",
  messagingSenderId: "961267860325",
  appId: "1:961267860325:web:a5565e2c1d834a1371178c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
