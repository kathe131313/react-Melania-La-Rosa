import "./styles.css"
import Servicio from "./Servicio";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Spinner } from 'react-bootstrap';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const Servicios = () => {
    const db = getFirestore();
    const { categoria } = useParams();
    const [serviciosFiltrados, setServiciosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchServicios = async () => {
        setLoading(true);
        setError(null);
  
        try {
          const refServ = collection(db, "Servicios");
          const serviciosQuery = query(refServ, where("categoria", "==", categoria));
          const snapshot = await getDocs(serviciosQuery);
  
          if (snapshot.empty) {
            setServiciosFiltrados([]);
          } else {
            const servicios = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setServiciosFiltrados(servicios);
          }
        } catch (err) {
          setError("Hubo un error al cargar los servicios.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchServicios();
    }, [categoria, db]);
  
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
      <div className="container mt-0 vh-50">
        {serviciosFiltrados.length > 0 ? (
          <Row>
            {serviciosFiltrados.map((servicio) => (
              <Col key={servicio.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Servicio
                  id={servicio.id}
                  nombre={servicio.n_servicio}
                  descripcion={servicio.descripcion}
                  precio={servicio.precio}
                  imagen={servicio.imagen}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center">Para esta categoría no se encontraron servicios.</p>
        )}
      </div>
    );
  };
  
  export default Servicios;