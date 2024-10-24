import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB6Ozuwgi6K9jxf-ovXBftS7YqR-By8vCw",
  authDomain: "my-insta-3b351.firebaseapp.com",
  projectId: "my-insta-3b351",
  storageBucket: "my-insta-3b351.appspot.com",
  messagingSenderId: "474589582230",
  appId: "1:474589582230:web:0b0be5f289d6a45ba503b7"
  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };


