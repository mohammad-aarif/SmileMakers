import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitializeAuth = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializeAuth;