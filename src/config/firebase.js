import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJKsxXav9X7qSg5I3BbM-mC2lTsVEbHuM",
  authDomain: "resoluteai-evaluation.firebaseapp.com",
  projectId: "resoluteai-evaluation",
  storageBucket: "resoluteai-evaluation.appspot.com",
  messagingSenderId: "36185547822",
  appId: "1:36185547822:web:a5a2dfa5e7ead72617abbf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
