import { Link } from 'react-router-dom';
import './error.scss';

export default function Error() {
  return (
    <section className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/mon-portfolio/">Retourner sur la page d’accueil</Link>
    </section>
  )
}