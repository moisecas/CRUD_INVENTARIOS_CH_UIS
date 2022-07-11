import { initializeApp } from "firebase/app"; //a esta función le paso el objeto de configuración, las credenciales

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFQaYk_beINXl01Q5m_ppMG_MXqO2M2Pg",
  authDomain: "uisinventario.firebaseapp.com",
  projectId: "uisinventario",
  storageBucket: "uisinventario.appspot.com",
  messagingSenderId: "881088914798",
  appId: "1:881088914798:web:96bf0da630d90e201d4d7f",
  measurementId: "G-YE81F23NY7"
};

// Initialize Firebase y la guarda en esta constante
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp; //lo exporto para que sea accesible desde afuera de este archivo y añade los servicios que necesita
//para conectarse a firebase pasar a todo por firebaseApp y luego a los servicios que necesita (auth, database, storage)