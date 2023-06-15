import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmjshwFAJQxa1VkkKgGsdaOPiyhWUZ4dU",
  authDomain: "portfolio-fd480.firebaseapp.com",
  databaseURL: "https://portfolio-fd480-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-fd480",
  storageBucket: "portfolio-fd480.appspot.com",
  messagingSenderId: "146983150884",
  appId: "1:146983150884:web:5ad48a755bd4b7d245ffb1",
  measurementId: "G-ZH7DLX5F6Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

//
export default db;