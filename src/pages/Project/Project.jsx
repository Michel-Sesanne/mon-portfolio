import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ListeProjets from '../../components/ListeProjets/ListeProjets';
import './project.scss';

export default function Project() {
  const { id } = useParams();
  const projets = useContext(ListeProjets);
  const projet = projets.find((element) => element.id === id);

  if (!projet) {
    return <Navigate to="/error" />;
  }  

  return (
    <section className='project'>      
      <h3>{projet.title}</h3>
      <p className="description">{projet.description}</p>
      <p className="challenges">
        <strong>Problématiques :</strong> {projet.challenges}
      </p>
      <p className="skills">
        <strong>Compétences développées :</strong>
        <ul>
          {projet.skills.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
      </p>
      <div className="links">
        {projet.codeLink && (
          <a href={projet.codeLink} target="_blank" rel="noopener noreferrer">
            Voir le code
          </a>
        )}
        {projet.siteLink && (
          <a href={projet.siteLink} target="_blank" rel="noopener noreferrer">
            Voir le site
          </a>
        )}
      </div>
    </section>
  );
}