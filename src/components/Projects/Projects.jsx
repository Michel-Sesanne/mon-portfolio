import Masonry from 'react-masonry-css';
import { useContext } from 'react';
import ListeProjets from '../ListeProjets/ListeProjets';
import Card from '../Card/Card';
import './projects.scss';

export default function Projects() {
  const breakpointColumnsObj = {
    default: 2,
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
        <Card
          key={project.id}
          id={project.id}
          title={project.title}
          cover={project.cover}
        />
      ))}
    </Masonry>
  );
}
