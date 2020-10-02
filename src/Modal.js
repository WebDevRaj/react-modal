import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

const Modal = (props) => (
	<div>
		<Backdrop  show={props.show} clicked={props.closeOnOverlayClick ? props.toggle : null}/>
		<div
			className="Modal"
			style={{
				transform: props.show
					? 'translate(-50%,-50%)'
					: 'translateY(-150vh)',
				opacity: props.show ? '1' : '0'
			}}
		>	
			<span className='closeBtn' onClick={props.toggle}>&#x2716;</span>
			{props.children}
		</div>
	</div>
);

export default Modal;