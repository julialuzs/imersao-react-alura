import React from 'react';
import Button from '../button/button';
import logo from '../../assets/app-logo.png';
import './header.css';

function Header() {
	return (
		<nav className="header">
			<a href="/">
				<img className="logo" alt="logo" src={logo}/>
			</a>

			<Button as="a" className="button-link" href="/novo-video">Novo vídeo</Button>
		</nav>
	);
}

export default Header;