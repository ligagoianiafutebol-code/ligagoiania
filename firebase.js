import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJB-DdvUk0_VQsGOwt5JNt552120QzsQ4",
  authDomain: "ligagoiania.firebaseapp.com",
  projectId: "ligagoiania",
  storageBucket: "ligagoiania.firebasestorage.app",
  messagingSenderId: "270024128834",
  appId: "1:270024128834:web:3c27ea257b08afd5e670db"
};

const app = initializeApp(firebaseConfig);

export { app };
