import React from 'react'
import { Container, Row, Stack, Col, Button } from 'react-bootstrap'


const Listar = ({arrayElementos}) => { //acá recibimos la data que nos envía el componente padreque es Home.js y lo mostramos en pantalla
  return (
    <Container>
        <Stack>
          {arrayElementos.map((objetoElemento) => {
            
            return (
            <> 
              <Row>
                <Col>{objetoElemento.descripcion}</Col>
                <Col>
                    <Button>Ver</Button>
                </Col>
                <Col>
                    <Button variant="primary">Eliminar</Button>
                </Col>
                </Row>
                <hr />
            </>
            )
          })}

        </Stack>
    </Container>
  )
}

export default Listar