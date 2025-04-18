import MyRoutes from "../../router/router";
import '../../styles/base/header.css'
import { useTheme } from "../../context/context";
import { NavLink } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() 
{
  const { theme, toggleTheme } = useTheme();

  return (
      <div className="App">
        <header>
          <nav className={`nav-${theme}`}>
            <ul className={`nav-list-${theme}`}>
              <li><NavLink to="/" activeClassName="active">Inicio</NavLink></li>
              <li><NavLink to="/buscador" activeClassName="active">Buscador</NavLink></li>
              <li><NavLink to="/landing" activeClassName="active">Landing</NavLink></li>
            </ul>

            <div className={`nav-list-${theme}`}>
              <button onClick={toggleTheme}>
                {theme === "light" ? <FaSun className="icono" /> : <FaMoon className="icono" />}
              </button>
            </div>

          </nav>          

        </header>

        <MyRoutes />
      </div>
    )
}