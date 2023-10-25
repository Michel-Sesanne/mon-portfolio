import Banner from '../../components/Banner/Banner';
import studying from './image_source_4.jpg';
import Collapse from '../../components/Collapse/Collapse';
import './about.scss';

export default function About() {
  return (
    <div className='about'>
      <Banner bannerImg={studying} tagline='Formation : Développeur Web chez OpenClassrooms de mai à novembre 2023.'/>
      <section className='competences'>
        <h1>Compétences</h1>
        <Collapse
          title='Frontend'
          content=''
          size='Large'
        />
        <Collapse
          title='Backend'
          content=''
          size='Large'
        />
        <Collapse
          title='SEO'
          content=''
          size='Large'
        />
        <Collapse
          title='Outils et Logiciels'
          content=''
          size='Large'
        />
      </section>      
    </div>
  );
};