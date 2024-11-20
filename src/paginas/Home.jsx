import React from "react";
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ greeting }) {
    return (
        <>
        
            <ItemListContainer greeting="Bienvenido a su centro de Bienestar" />
        </>

    )
}
export default Home