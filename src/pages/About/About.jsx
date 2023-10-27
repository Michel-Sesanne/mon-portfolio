import Banner from '../../components/Banner/Banner';
import studying from './image_source_4.jpg';
import Collapse from '../../components/Collapse/Collapse';
import './about.scss';

export default function About() {
  return (
    <div className='about'>
      <Banner bannerImg={studying} tagline='Formation : Développeur intégrateur web | OpenClassrooms-2023'/>
      <section className='competences'>
        <h1>Compétences</h1>
        <Collapse
          title='Frontend'
          content={[
            'HTML 5.0, CSS 3.0, JavaScript',
            'React.js',
            'Sass, jQuery, Bootstrap',
          ]}
          size='Large'
        />
        <Collapse
          title='Backend'
          content={[
            'Node.js, bases de C++',
            'MongoDB, bases de PostgreSQL',
            'Algorithmes et structures de données'
          ]}
          size='Large'
        />
        <Collapse
          title='SEO'
          content={[
            'Audit et optimisation de la performance web',
            'Amélioration de l\'accessibilité web',
            'Optimisation SEO avec Schema.org'
          ]}
          size='Large'
        />
        <Collapse
          title='Outils et Logiciels'
          content={[
            'VS Code',
            'Ligthhouse, GTMetrix',
            'Figma',
            'Trello'
          ]}
          size='Large'
        />
      </section>      
    </div>
  );
};