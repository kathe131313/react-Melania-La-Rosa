import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: "serviceclara",
  storageBucket: "serviceclara.firebasestorage.app",
  messagingSenderId: "319594850924",
  appId: import.meta.env.VITE_APPID
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
