import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGvrFCV6ZaqBZZ4YFE_0yYY8E-x7HcRSw",
  authDomain: "my-portfolio-app-1d9c7.firebaseapp.com",
  projectId: "my-portfolio-app-1d9c7",
  storageBucket: "my-portfolio-app-1d9c7.firebasestorage.app",
  messagingSenderId: "1055910362718",
    appId: "1:1055910362718:web:8ff6f54ca069b2773afecf",
  databaseURL:"https://my-portfolio-app-1d9c7-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);