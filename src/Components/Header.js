import React from 'react';
import trollFace from '../Images/troll-face.png';

function Header() {
	return (
		<header className="header">
			<div className="header-left">
				<img
					src={trollFace}
					alt="Troll face"
					width="40px"
					className="header-img"
				/>
				<h2 className="header-title">Meme Generator</h2>
			</div>
			<h3 className="header-project">React Project</h3>
		</header>
	);
}

export default Header;
