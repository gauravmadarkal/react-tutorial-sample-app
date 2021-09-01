import React from 'react';
import './style.css';

const Input = ({
	label,
	placeholder,
	onChange,
	value,
	multiline,
	classes
}) => (
	<div className='inp-wrp'>
		{label && 
			<label className='inp-lb'>
				{label}
			</label>
		}
		{!multiline ? 
			<input value={value} placeholder={placeholder} onChange={onChange} className={`${classes} inp`} />
			:
			<textarea value={value} placeholder={placeholder} onChange={onChange} className={`${classes} inp`} />
		}
	</div>
);

export default Input;