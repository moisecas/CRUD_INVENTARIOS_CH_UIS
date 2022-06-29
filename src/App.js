
import React, {useState, useEffect} from "react";
import Home from "./components/Home"; //importar el componente Home para usarlo en app.js
import Login from "./components/Login"; //importar el componente Login para usarlo en app.js 

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null); //
  return <>{usuarioGlobal ? <Home /> : <Login />}</>  //en caso de que no este logueado le muestre login, operador ternarios
}

export default App;
