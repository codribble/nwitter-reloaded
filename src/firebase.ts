import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv5EDlOLcQ8oy2PpLqj-Ky73Urxu-nHnk",
  authDomain: "nwitter-reloaded-e378e.firebaseapp.com",
  projectId: "nwitter-reloaded-e378e",
  storageBucket: "nwitter-reloaded-e378e.appspot.com",
  messagingSenderId: "1040218141315",
  appId: "1:1040218141315:web:0c718f4564501e88a721b6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
