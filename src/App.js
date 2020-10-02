import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
const App = () => {
	const [isModal, setIsModal] = useState(false)

	const toggleModal = () => {
		setIsModal(!isModal)
	}

	return (
		<div className="App">
			<Modal show={isModal} toggle={toggleModal} closeOnOverlayClick={false}>
				<div>
					<ul>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
						<li>Item 4</li>
					</ul>
				</div>
			</Modal>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
        </p>
			<button onClick={toggleModal}>
				show modal
        </button>
		</div>
	);
}

export default App;
