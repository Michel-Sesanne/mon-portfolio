import { Link } from 'react-router-dom';
import portrait from './portrait.png';
import Navigation from '../Navigation/Navigation';
import './header.scss';

export default function Header() {    
    return (
        <header>
            <Link to="/mon-portfolio/">
                <img src={portrait} alt="portrait de Michel" />
            </Link>            
            <Navigation />
        </header>
    )    
}