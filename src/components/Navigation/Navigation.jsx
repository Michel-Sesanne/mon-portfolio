import { NavLink } from 'react-router-dom';
import './navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/mon-portfolio/" activeclassname="active">Mes projets</NavLink>
        </li>
        <li>
          <NavLink to="/mon-portfolio/about" activeclassname="active">Mon profil</NavLink>
        </li>
      </ul>
    </nav>
  );
}