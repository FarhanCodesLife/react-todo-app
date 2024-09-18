import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfLpCfzWbmk_R4KgC-FvWPrgVA5QBHfiI",
  authDomain: "routing-prectice.firebaseapp.com",
  projectId: "routing-prectice",
  storageBucket: "routing-prectice.appspot.com",
  messagingSenderId: "61264917649",
  appId: "1:61264917649:web:2e4a4483a85675eb7a3b30"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
