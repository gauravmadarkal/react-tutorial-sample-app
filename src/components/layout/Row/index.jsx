import React from 'react';
import './style.css';

const Row = ({
	classes,
	children
}) => {
	return (
		<div className={`${classes} row`}>
			{children}
		</div>
	)
};

export default Row;