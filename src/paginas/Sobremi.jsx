import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";


function Sobremi() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carru3.jpg"
          alt="carru2"
          
        />
        <div className='texto'>
          <Carousel.Caption>
            <h5>Bienvenidos</h5>
            <p>Les cuento un poco sobre mis estudios y prácticas durante el correr de mi vida.</p>
            <p>Soy Fisioterapeuta. Hice el Curso de Quiromasaje (Masaje Manual) del Dr. Sagrera Ferrandiz (Barcelona, España).</p>
            <p>El ser Instructora de Pilates Mat me ha ayudado mucho con mi postura para trabajar cuidando mi columna y la forma</p>
            <p>de realizar los esfuerzos físicos.  A la vez he completado cursos de medicina china, pudiendo así complementar 
            lo occidental con lo oriental como un método sólo.</p>
            <p>Desde muy joven me interesaron los temas que transitamos alrededor de la Energía en este plano y los que están cerca nuestro.</p>
            <p> Hice cursos profundos de Númerología Humanista, con Martín Cocquatrix; así como de Tarot con Martha Temponi.</p>
            <p> El estudio de Registros Akáshicos ha sido un antes y un después en la conexión con lo maravilloso.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/carru3.jpg"
          alt="carru3"
          
        />
        <div className='texto'>
          <Carousel.Caption>          
            <h5>Más de 37 años de vida profesional.</h5>
            <p> Las Limpieza Energética a Personas, a Hogares y a Comercios, han dado resultados con cambios grandes de paz, amor, armonía y abundancia.</p>
            <p>Estudié los tres niveles de Terapia Floral de Bach, pudiendo así ejercer como Terapeuta. Estudié Bioneuroemoción en la Escuela de Corbera, así como Un Curso de Milagros, en la misma Escuela.
               Se preguntarán, esta persona pudo estudiar todo eso? Han sido 37 años de estudios y profundización de cada uno de ellos, junto a la experiencia de aplicarlos
            y compartirlos con la gente que confía en mí.</p>
            <p>A todos ustedes, Gracias!</p>
           
          </Carousel.Caption>
          </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/assets/carru1.jpg"
          alt="Third slide"

        />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sobremi;