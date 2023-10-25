import Banner from '../../components/Banner/Banner';
import workspace from './image_source_1.jpg';
import Projects from '../../components/Projects/Projects';
import './home.scss';

export default function Home() {
  return (
    <div className='home'>
        <Banner bannerImg={workspace} tagline="Michel SESANNE - Développeur Web" />
        <Projects />
    </div>
  );
};