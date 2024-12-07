import React from "react";
import ItemListContainer from '../components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ greeting }) {

    return (
        <>
            <div className="video-wrapper m-0">
                <video className="background-video h-100 w-100 m-0" autoPlay muted loop>
                    <source src="/assets/video.mp4" type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>

            </div>


        </>

    )
}
export default Home