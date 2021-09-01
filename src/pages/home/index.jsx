import React, { useState } from 'react';
import './style.css';
import Row from '../../components/layout/Row';
import Col from '../../components/layout/Col';
import Hero from '../../assets/images/developer.svg';
import Button from '../../components/common/button';
import { Link } from 'react-router-dom';

const Home = () => {
	const [subscribed, setSubscribed] = useState(false);

	return (
		<div className='hm-c'>
			<Row>
				<Col classes='wd-60'>
					<h1 className='title'>Hi, I'm Jacob</h1>
					<p className='desc'>I'm a Software Developer, Freelancer and a Product designer based out of Boulder, Colorado</p>
					<Button type='primary' fill='#eceff1'>
						<Link to='/contact' className='link'>Contact Me</Link>
					</Button>
				</Col>
				<Col classes='wd-40'>
					<img src={Hero} className='hero' alt='Jacob`s profile' />
				</Col>
			</Row>
			{!subscribed?  
				<Row classes='subscribe'>
					<span>Subscribe to my tech blog</span>
					<Button content='Subscribe' type='secondary' classes='subs-btn' clickHandler={() => setSubscribed(true)} />
				</Row>
				:
				<span>Thank you for subscribing to my blog</span>
			}
		</div>
	)
};

export default Home;