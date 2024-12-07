import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";




const DetalleServicio = ({ addToCart }) => {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const db = getFirestore();

  useEffect(() => {
    const fetchServicio = async () => {
      setLoading(true);
      setError(null);
      try {
        const refServicio = doc(db, "Servicios", id);
        const docSnap = await getDoc(refServicio);

        if (docSnap.exists()) {
          setServicio({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("No se encontró el servicio");
        }
       
      } catch (err) {
        setError("Error al obtener el servicio:");

      } finally {
        setLoading(false);
      }
    };

    fetchServicio();
  }, [id, db]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="d-flex justify-content-center">
      <Row className="align-items-center mb-5">
        <Col lg={6} md={12} className="text-center mb-lg-0 d-flex justify-content-center">
          <img src={servicio.imagen} alt={servicio.n_servicio} style={{ width: "500px" }} />
        </Col>
        <Col lg={6} md={12}>

          <h1 className="mb-3">{servicio.n_servicio}</h1>
          <p className="text-muted">{servicio.descripcion}</p>
          <p>
            <strong>Categoría:</strong> {servicio.categoria}</p>

          <h4 className="text-success">
            Precio: ${servicio.precio.toFixed(2)}
          </h4>

          <Button
            className="btn btn-success mt-2" onClick={() => addToCart({ id: servicio.id, name: servicio.n_servicio, price: servicio.precio })}
          >Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>

  );
};

export default DetalleServicio;
