// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBct9IeJNya7xq-dG6eFv1cdDdOn4IEEHw",
  authDomain: "sumula-8027e.firebaseapp.com",
  projectId: "sumula-8027e",
  storageBucket: "sumula-8027e.appspot.com",
  messagingSenderId: "532547952520",
  appId: "1:532547952520:web:ca5ef98c6de024aa48a43d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
