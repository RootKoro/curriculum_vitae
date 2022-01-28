import { Link } from 'react-router-dom'
import '../stylesheets/Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar-header">
            <ul>
                <li>
                    <Link to="/">Service</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;