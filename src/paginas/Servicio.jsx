import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"

const Servicio = ({ id, nombre, precio, imagen }) => {
 
  return (
    <Card className="h-40">
      <Card.Img
        variant="top"
        src={imagen}
        alt={nombre}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-primary">{nombre}</Card.Title>
       
        <Card.Text className="fw-bold text-success">
          Precio: ${precio.toFixed(2)}
        </Card.Text>
        <Link to={`/servicios/${id}`} className="btn custom-button">
          Ver Detalles
        </Link>
      </Card.Body>
    </Card>
  );
};

Servicio.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Servicio;
