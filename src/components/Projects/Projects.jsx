import Masonry from 'react-masonry-css';
import { useContext } from 'react';
import ListeProjets from '../ListeProjets/ListeProjets';
import Project from '../Project/Project';
import './projects.scss';

export default function Projects() {
  const breakpointColumnsObj = {
    default: 3,
    1400: 2,
    700: 1,
  };

  const projects = useContext(ListeProjets);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Masonry>
  );
}
