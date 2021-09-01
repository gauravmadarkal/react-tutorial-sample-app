import React from 'react';
import './style.css';

const Button = ({
	type,
	fill,
	content,
	clickHandler,
	classes,
	children
}) => {
	return (<button className={`${classes} button ${type}`} style={fill ? { backgroundColor: fill} : {}} onClick={clickHandler}>
		{content || children}
	</button>)
};

export default Button;