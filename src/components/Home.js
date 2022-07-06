import React from 'react'

//para cerrar sesión 
//importamos componentes e instanciamos lo que necesitamos para cerrar sesión 
import firebaseApp from '../Credenciales'
import { getAuth, signOut } from 'firebase/auth'
import { Container, Button } from 'react-bootstrap' //importamos el componente Container de react-bootstrap
const auth = getAuth(firebaseApp)

const Home = () => {
  return ( <Container> 
    <h4>
    Home, sesión iniciada
    </h4>
    <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
  
  </Container>
  
  )
}

export default Home