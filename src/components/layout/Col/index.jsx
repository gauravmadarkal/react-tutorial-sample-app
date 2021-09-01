import React from 'react';
import './style.css';

const Col = ({
	classes,
	children
}) => {
	return (
		<div className={`${classes} col`}>
			{children}
		</div>
	)
};

export default Col;