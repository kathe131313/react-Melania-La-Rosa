import React from "react";
import servicios from "../servicios"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function DetalleServicio() {

  const { id } = useParams();
  
  console.log(id)
  const servicio = servicios.find(servi => servi.id === parseInt(id))

  if (!servicios) {
    return <h2>El servicio no existe!</h2>
  }
  return (
    <Container>
   <h2>Detalle del servicio</h2>
      
      <Row>
      
        <Col md={8}>
          <Card.Img
            variant="top"
            src={servicio.imagen}
            alt={servicio.nombre}
            className="tamano-ima"
            
          />
        </Col>

        <Col md={2}>
          <Card>
            <Card.Body>

              <Card.Title>{servicio.n_servicio}</Card.Title>
              <Card.Text>{servicio.descripcion}</Card.Text>
              <Card.Text>
                {servicio.precio}
              </Card.Text>
              <button className="btn custom-button">Agregar al carrito</button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      

  );
}

export default DetalleServicio