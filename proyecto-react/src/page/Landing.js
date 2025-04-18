import { FaArrowLeft } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaEnvelope, FaLink, FaInstagram  } from 'react-icons/fa6';
import "../styles/landing.css";

export default function Landing() {
    return (
        <div className="landing">
            <div className="principal-image">
                <img src="https://www.leblancsparesorts.com/pool-aerial-view-le-blanc-spa-resorts_565cae4134.webp" alt="Landing" />
                <div className="principal-image-text">
                    <div className="principal-image-text-title">
                        <a href="/" className="btn btn-primary"><FaArrowLeft /> Volver</a>
                        <p>NOVEDADES EN ESPACIOS PARA NO FUMAR DE LE BLANC</p>
                    </div>
                </div>
            </div>

            <div className="landing-text">
                <div className="landing-text-title">
                    <p className="landing-base-text">Para brindar un entorno agradable y seguro a todos nuestros huéspedes estamos trabajando para alinearnos con las nuevas regulaciones de control de uso de tabaco. Por lo anterior, estamos haciendo algunas modificaciones en las áreas para fumadores dentro de nuestros resorts, creando espacios específicos que se ajusten a los requerimientos establecidos por ley, que incluyen lo siguiente:</p>
                    
                    <img src="https://www.leblancsparesorts.com/couple_at_swimming_pool_le_blanc_spa_resorts_5dab1b7917.webp" alt="Landing" className="landing-image" />

                    <ul className="landing-list">
                        <li>Las áreas designadas para fumadores deben estar en espacios separados físicamente de las que son 100% libres de humo de tabaco y deben estar a 10 metros o más de cualquier zona de paso contínuo de personas, puntos de reunión o de conductos de entrada de aire.</li>
                        <li>Las señalizaciones deben prohibir con claridad el acceso de los niños a las áreas designadas para fumar, además se advertirá sobre los riesgos de salud que corren quienes se exponen a las áreas exclusivas para fumadores.</li>
                        <li>En las áreas exclusivas para fumar no se permite el acceso a los niños. Se debe advertir el riesgo de acceso a estas áreas para mujeres embarazadas, adultos mayores y quienes padezcan de enfermedades cardiovasculares o respiratorias, así como cáncer o asma.</li>
                    </ul>

                    <img src="https://www.leblancsparesorts.com/sunset_pool_le_blanc_spa_resorts_58620b35be.webp" alt="Landing" className="landing-image" />

                    <p className="landing-base-text">Los cambios no causarán ningún impacto en la experiencia y el disfrute de nuestros huéspedes durante su estadía.</p>

                    <img src="https://www.leblancsparesorts.com/pool_terrace_le_blanc_spa_resorts_a90344c101.webp" alt="Landing" className="landing-image" />
                </div>
            </div>

           <div className="landing-social-media">
           <div className="info-bar">
                <p className="info-text">
                    NOVEDADES EN ESPACIOS PARA FUMAR DE LE BLANC
                </p>
                <div className="info-icons">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaEnvelope />
                    <FaLink />
                </div>
            </div>
            </div>

            <div className="landing-footer">
                <div className="footer-text">
                    <div className="footer-top">
                <div className="footer-columns">
                <div className="footer-column">
                    <h4>Nuestros Sitios Web</h4>
                    <ul>
                    <li>Palace Resorts</li>
                    <li>Moon Palace Resorts</li>
                    <li>Baglioni Hotels & Resorts</li>
                    <li>Palace Elite</li>
                    <li>Bodas</li>
                    <li>Convenciones</li>
                    <li>Agencias de Viajes</li>
                    <li>The Palace Company</li>
                    <li>Transportación</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Recursos</h4>
                    <ul>
                    <li>Blog Tips Viajeros</li>
                    <li>Sala de Prensa</li>
                    <li>Contacto</li>
                    <li>Mejor Tarifa Garantizada</li>
                    <li>Le Blanc App</li>
                    <li>Centro de Ayuda</li>
                    <li>Políticas y Avisos de Privacidad</li>
                    <li>Política de Sustentabilidad</li>
                    <li>Política de Huracán</li>
                    <li>Términos y Condiciones</li>
                    <li>Mapa del Sitio</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Acerca de Le Blanc</h4>
                    <ul>
                    <li>Earth Inclusive</li>
                    <li>Servicio de Mayordomo</li>
                    <li>Fundación Palace</li>
                    </ul>
                </div>
                <div className="footer-column form">
                    <h4>Suscríbete y recibe nuestras ofertas</h4>
                    <div className="form-grid">
                    <input type="text" placeholder="Nombre*" />
                    <input type="text" placeholder="Apellido*" />
                    <input type="email" placeholder="Correo*" />
                    <select>
                        <option>País</option>
                    </select>
                    </div>
                    <label className="privacy">
                    <input type="checkbox" />
                    He leído y estoy de acuerdo con los <span>Términos de Uso</span> y el <span>Aviso de Privacidad Integral</span>.
                    </label>
                    <button className="submit-btn">Enviar</button>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="social">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            </div>
            <div className="footer-text">Este sitio web es propiedad de PR Global Reservations, LLC.</div>
            <div className="footer-langs">
            <span>English</span>
            <span className="active">Español</span>
            </div>
        </div>
                </div>
            </div>

        </div>
    );
}