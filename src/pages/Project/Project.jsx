import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ListeProjets from '../../components/ListeProjets/ListeProjets';
import './project.scss';

export default function Project() {
  const { id } = useParams();
  const projets = useContext(ListeProjets);
  const projet = projets.find((element) => element.id === id);

  if (!projet) {
    return <Navigate to="/mon-portfolio/error" />;
  }  

  return (
    <article className='project'>      
      <h1>{projet.title}</h1>
      <p className="description">{projet.description}</p>           
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
      <section className="skills">
        <h2>Compétences développées :</h2>
        <ul>
          {projet.skills.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
      </section>
      <section className="challenges">
        <h2>Problématiques :</h2>
        <p>{projet.challenges}</p> 
      </section> 
    </article>
  );
}