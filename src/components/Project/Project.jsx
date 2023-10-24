import { Link } from 'react-router-dom';
import './project.scss'

export default function Project({ id, title, cover }) {
    return (
        <Link to={'/project/' + id} key={id} id={id}>
            <article className="project">
                <div className='text-overlay'>
                    <h2>{title}</h2>
                </div>                
                <img src={cover} alt={title} />
            </article>
        </Link>
    )
}