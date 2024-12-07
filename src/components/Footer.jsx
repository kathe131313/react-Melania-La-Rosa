import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>CarlaTemponi</h3>
                    <p>Tu mejor elección para terapias energéticas y bienestar.</p>
                </div>
                <div className="footer-section links">
                    <h4>Enlaces Útiles</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/category/masaje">Masajes</a></li>
                        <li><a href="/category/meditacion">Meditación</a></li>
                        
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h4>Contacto</h4>
                    <p>Email: contacto@mitienda.com</p>
                    <p>Teléfono: +123 456 789</p>
                    <p>Dirección: Calle Bienestar 123, Ciudad</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CarlaTemponi. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
