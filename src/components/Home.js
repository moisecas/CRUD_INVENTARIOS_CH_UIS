import React from 'react'
import Agregar from './Agregar'
import Listar from './Listar'
//para cerrar sesión 
//importamos componentes e instanciamos lo que necesitamos para cerrar sesión 
import firebaseApp from '../Credenciales'
import { getAuth, signOut } from 'firebase/auth'
import { Container, Button } from 'react-bootstrap' //importamos el componente Container de react-bootstrap
import {getFirestore, doc, getDoc} from 'firebase/firestore' //conexión a la base de datos, doc documento, getdoc para obtener el documento

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)


const Home = ({correoUsuario}) => {
  console.log(correoUsuario)

  const fakeData = [
    {id: 1, descripcion: 'elemento', ubicacion: 'uis'},
    {id: 2, descripcion: 'elemento2', ubicacion: 'uisch'},
    {id: 3, descripcion: 'elemento3', ubicacion: 'uis sea'}, //objeto
  ]

  //función asincrona para conectarse con firebase
  async function conectarFirebase(idDocumento) {
    //crear una referencia al documento
    const docuref = doc(firestore, `usuarios/${idDocumento}`)
    //bucar documento
    const consulta = await getDoc(docuref)

    //revisar si existe
    if (consulta.exists()) {
      
    }

    //si no existe
  }

  return ( <Container> 
    <h4>
    Home, sesión iniciada
    </h4>
    <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
    <hr />
    <Agregar/>
    <Listar arrayElementos={fakeData}/> {/*aquí le pasamos el array de elementos, fakedata es recibido por Listar.js */}
  </Container>
  
  )
}

export default Home