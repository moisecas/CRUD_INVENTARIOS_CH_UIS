
import React, {useState, useEffect} from "react";
import Home from "./components/Home"; //importar el componente Home para usarlo en app.js
import Login from "./components/Login"; //importar el componente Login para usarlo en app.js 
import Nabvar from "./components/Nabvar";

import firebaseApp from "./Credenciales"; //importar el archivo credenciales.js
import { getAuth, onAuthStateChanged } from "firebase/auth"; //valida si el usuario esta logueado, si esta logueado muestra el componente Home, si no, muestra el componente Login
const auth = getAuth(firebaseApp);


function App() { //validando 
  
  const [usuarioGlobal, setUsuarioGlobal] = useState(null); //usuarioglobal nos guarda toda la informacion del usuario que esta logueado
  onAuthStateChanged(auth, (usuarioFirebase) => { //recibe el usuario de firebase, y lo guarda en el estado
    if (usuarioFirebase) { //evalua si el usuario existe en firebase por medio de la identificacion del correo electronico
      //sesión iniciada
      setUsuarioGlobal(usuarioFirebase); //guarda el usuario en el estado
    }else{
      //sesión no iniciada
      setUsuarioGlobal(null); //null en caso de cierre de seisión, actualizamos el estado 
    }
  })
  return <>
    <Nabvar usuario={usuarioGlobal} />
  {usuarioGlobal ? (
    
    <Home correoUsuario={usuarioGlobal.email} /> //si el usuario existe, muestra el componente Home
  ) : (
    <Login />
  )}
</>  //en caso de que no este logueado le muestre login, operador ternarios
}

export default App;
