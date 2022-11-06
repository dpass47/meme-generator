import React, { useEffect, useState } from 'react';

function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch(`https://api.imgflip.com/get_memes`)
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, [meme]);

	function getMemeImage() {
		const num = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[num].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			topText: '',
			bottomText: '',
			randomImage: url,
		}));
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<div className="meme-container">
			<div className="form">
				<div className="input-field">
					<input
						autoComplete="off"
						type="text"
						className="form-input top-input"
						placeholder="Top Text"
						name="topText"
						value={meme.topText}
						onChange={handleChange}
					/>
					<input
						autoComplete="off"
						type="text"
						className="form-input bottom-input"
						placeholder="Bottom Text"
						name="bottomText"
						value={meme.bottomText}
						onChange={handleChange}
					/>
				</div>
				<button className="get-btn" onClick={getMemeImage}>
					Get a new meme image 🖼️
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="" className="meme-image" />
				<h2 className="meme-text top">{meme.topText.toUpperCase()}</h2>
				<h2 className="meme-text bottom">{meme.bottomText.toUpperCase()}</h2>
			</div>
		</div>
	);
}

export default Meme;
