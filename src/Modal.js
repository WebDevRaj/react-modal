import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

const Modal = (props) => (
	<div>
		<Backdrop  show={props.show} clicked={props.toggle}/>
		<div
			className="Modal"
			style={{
				transform: props.show
					? 'translate(-50%,-50%)'
					: 'translateY(-150vh)',
				opacity: props.show ? '1' : '0'
			}}
		>	
			{props.children}
		</div>
	</div>
);

export default Modal;