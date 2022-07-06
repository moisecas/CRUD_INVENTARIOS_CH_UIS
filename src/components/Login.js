import React, {useState} from 'react'
import {Stack, Container, Form, Button} from "react-bootstrap"; 

import firebaseApp from '../Credenciales.js'; //importar el archivo credenciales.js
import {getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signInWithRedirect, GoogleAuthProvider} from "firebase/auth"; //autenticación con firebase, cada funcion hace algo distinto

const auth = getAuth(firebaseApp); //obtengo el servicio de autenticación, inicializado con la aplicación y credenciales
const googleAuthProvider = new GoogleAuthProvider(); //creo un nuevo proveedor de autenticación de Google

const Login = () => { //registrando 
    const [estaRegistrandose, setEstaRegistrandose] = useState(false); //estado de registrandose, false iniciando sesión 
    async function submitHandler(event) { //recibe el evento del formulario
    event.preventDefault(); //prevenir que se recargue la página
    const email = event.target.formBasicEmail.value; //obtener el email del formulario, usando los id de cada campo
    const password = event.target.formBasicPassword.value; //obtener el password del formulario
   
   
    if (estaRegistrandose) {//si estaRegistrandose es true, es porque estoy registrando
        const user = await createUserWithEmailAndPassword(auth, email, password) //crear usuario con email y password, promesa

    }else{
        signInWithEmailAndPassword(auth, email, password) //iniciar sesión con email y password, promesa
    }
    

    

}     
    return (
    <Container> 
        <Stack gap={3}>
        <h1>{estaRegistrandose ? 'Registrarse' : 'Iniciar sesión'}</h1> {/*si estaRegistrandose es true muestra registrarse, si no iniciar sesión*/}
            <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            {estaRegistrandose ? 'Registrarse' : 'Iniciar sesión'}
        </Button>
    </Form>
    <Button variant="primary" type="submit" onClick={()=>signInWithRedirect(auth,googleAuthProvider)}> {/*botón de iniciar sesión con google, recibe los parametros declarados necesarios para autenticar el login*/}
            Acceder con Google 
    </Button>
    <Button variant="primary" onClick={()=>setEstaRegistrandose(!estaRegistrandose)}> {/* cambia el estado */}
            {estaRegistrandose ? '¿Tiene cuenta? Inica sesión' : 'Registrarse'} {/* depende del estado de estaregistransdose o es uno o otra opción */}
    </Button>

        </Stack>
    
    </Container>
      

  )
}

export default Login