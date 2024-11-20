import { Card, Button } from 'react-bootstrap';
import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom"


function Servicio({ id, n_servicio, descripcion, precio, imagen }) {
  return (
    <Card className="style-servi mb-8">

      <Card.Img variant="top" src={imagen} alt={n_servicio} clasName="imagen-servi" />

      <Card.Body>

        <Card.Title>{n_servicio}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>

        <Card.Subtitle className="mb-2 text-muted">Precio: ${precio.toFixed(2)}</Card.Subtitle>

        <Link to={`/servicios/${id}`} className="btn custom-button">
          Ver Detalles
        </Link>

      </Card.Body>

    </Card>
  );
}

export default Servicio