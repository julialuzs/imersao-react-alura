import React from 'react';
import Button from '../button/button';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
	return (
		<nav className="header">
			<Link to="/">
				<img className="logo" alt="logo" src={logo}/>
			</Link>

			<Button as={Link} className="button-link" to="/register/video">New video</Button>
		</nav>
	);
}

export default Header;