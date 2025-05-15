import '../styles/home.css'
import piña from '../img/piña.png'
import { GiChefToque } from 'react-icons/gi'

export default function Home() {
    return (
      <div className="base">
        <div className="hero">
          <div className="left-column">
            <img src={piña} alt="Piña" className="pineapple" />
          </div>

          <div className="right-column">
            <div className="logo">
              <GiChefToque className="chef-icon" />
              <span>HomeChef</span>
            </div>

            <div className="title-row">
              <h1 className="line">Chefs</h1>
              <div className="message">🔶 New recipe for you to try out, let’s cook!</div>
            </div>

            <h1 className="line right">Academy</h1>
            <h1 className="line">Secrets</h1>
          </div>
        </div>
      </div>
    );
}