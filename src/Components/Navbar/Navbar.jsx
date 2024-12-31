import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className='Navbar-container'>
            <div className='Navbar-Logo'>
                <Link to="/" className='Navbar-Title'>Zy</Link>
            </div>
            <nav>
                <ul className='Navbar-List'>
                    <li>
                        <Link to="/" className='Navbar-Link-btn'>Home</Link>
                    </li>
                    <li>
                        <Link to="/About" className='Navbar-Link-btn'>About</Link>
                    </li>
                    <li>
                        <Link to="/Projects&Achievements" className='Navbar-Link-btn'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/Contacts" className='Navbar-Link-btn'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;