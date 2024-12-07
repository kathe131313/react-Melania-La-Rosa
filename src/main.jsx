import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAa0E_T-qmWHT0UGCcgFOVkoFL5EpIMblc",
  authDomain: "serviceclara.firebaseapp.com",
  projectId: "serviceclara",
  storageBucket: "serviceclara.firebasestorage.app",
  messagingSenderId: "319594850924",
  appId: "1:319594850924:web:3872ad879790e477fd0649"
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
