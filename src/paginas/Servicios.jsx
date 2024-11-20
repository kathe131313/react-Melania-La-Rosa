import "./styles.css"
import servicios from "../servicios"
import Servicio from "./Servicio";
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Spinner } from 'react-bootstrap';
const Servicios = () => {
    const { categoria } = useParams();
    const [serviciosFiltrados, setServiciosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setError(null);
        console.log("mi arreglo servicios", servicios);
        // Filtrado por categoría                                                             //
        const serviciosFiltrados = servicios.filter((servicio) => servicio.categoria === categoria);
       
        console.log("Categoría seleccionada:", categoria); 
        console.log("Servicios filtrados:", serviciosFiltrados);




        // Verificar cuando no existe la categoría                 //


        if (serviciosFiltrados.length === 0) {
            navigate('/nopage', { replace: true });
        }
        else {
            setServiciosFiltrados(serviciosFiltrados);
        }


        setLoading(false);
    }, [categoria, navigate]);


    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }
    return (
        <div className="container">
            
            {serviciosFiltrados.length > 0 ? (
                <Row>
                    {serviciosFiltrados.map((servicio) => (
                        <Col key={servicio.id}>
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
                <p>Para esta categoria no se encontraron servicios.</p>
            )}
        </div>
    );
};




export default Servicios



