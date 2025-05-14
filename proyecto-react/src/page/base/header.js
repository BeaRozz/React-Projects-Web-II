import { Link } from "react-router-dom";
import MyRoutes from "../../router/router";
import '../../styles/base/header.css'

export default function Header() 
{
    return (
        <div className="App">
            <header>
            {/* <nav>
              <ul className='nav-list'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">About us</Link></li>
              </ul>

            </nav>           */}

            </header>

            <MyRoutes />
        </div>
    )
}