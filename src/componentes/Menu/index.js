import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from './Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="WebFlix" />
            </Link>

            <Button as={Link} className="Button" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;