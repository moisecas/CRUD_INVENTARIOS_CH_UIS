import React, { useState, useEffect } from "react";

import firebaseApp from "../Credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //doc y getDoc son funciones de firebase para obtener documentos

import { Container, Button } from "react-bootstrap";

import AgregarTarea from "./Agregar";
import ListadoTareas from "./Listar";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp); //acceso a la base de datos

const Home = ({ correoUsuario }) => { //recibe el correo del usuario que esta logueado
  const [arrayElementos, setArrayElementos] = useState(null); //estado para guardar elementos, el usestate se usa para guardar datos
  const fakeData = [
    { id: 1, descripcion: "elemento 1", url: "ubicación 1" },
    { id: 2, descripcion: "elemento 2", url: "ubicación 2" },
    { id: 3, descripcion: "elemento 3", url: "ubicación 3" },
  ];

  async function conectarFirebase(idDocumento) { //busca el documento en firestore, si no existe lo crea
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`); //solicita dos argumentos, el objeto firestore y el id del documento
    // buscar documento
    const consulta = await getDoc(docuRef); //getDoc es una funcion de firebase que recibe una referencia a un documento
    // revisar si existe
    if (consulta.exists()) { //exists metodo dentro de un documento, si existe, retorna true
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      // si no existe
      await setDoc(docuRef, { elementos: [...fakeData] }); //setDoc es una funcion de firebase para crear un documento, fakedata es un array de objetos para que no este vacio de inicio
      const consulta = await getDoc(docuRef); //hacemos la consulta de nuevo para que nos devuelva el documento
      const infoDocu = consulta.data(); //obtenemos la informacion del documento 
      return infoDocu.elementos; //retorna el array  
    } 
  }

  useEffect(() => { //la corremos al inicio de la aplicacion para que nos devuelva el array 
    async function fetchElementos() {
      const elementosFetch = await conectarFirebase( //buscar documento correspondiente al correo del usuario logueado
        correoUsuario
      );
      setArrayElementos(elementosFetch); //guardamos el array en el estado
    }

    fetchElementos(); //ejecutamos la funcion
  }, []);
  //el componente corre nos busca los elementos y los muestra

  return (
    <Container>
      <h4>Sesión iniciada</h4>
      <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
      <hr />
      <AgregarTarea
        arrayTareas={arrayElementos}
        setArrayTareas={setArrayElementos}
        correoUsuario={correoUsuario}
      />
      {arrayElementos ? (
        <ListadoTareas
          arrayTareas={arrayElementos}
          setArrayTareas={setArrayElementos}
          correoUsuario={correoUsuario}
        />
      ) : null}
    </Container>
  );
};

export default Home;