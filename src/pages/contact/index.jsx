import React from 'react';
import './style.css';
import Input from '../../components/common/input';
import Button from '../../components/common/button';
import Row from '../../components/layout/Row';
import Col from '../../components/layout/Col';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mail: '',
			message: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// simulating a API call to the backend and fetching the data
		setTimeout(() => {
			this.setState({
				data: {
					email: 'jacob123@colorado.edu',
					addr: '30th and Folsom st, Boulder, CO'
				}
			})
		}, 2000);
	}

	handleSubmit() {
		// you can make a POST call and save the data on your database
		console.log(this.state.name, this.state.mail, this.state.message)
	}

	render() {
		return (
			<div className='ct-c'>
				<h1 className='text'>Send me a message</h1>
				<Input 
					label='Name' 
					placeholder='Enter your name here' 
					onChange={(e) => this.setState({
						...this.state, name: e.target.value
					})}
					value={this.state.name}
				/>
				<Input 
					label='Email Address' 
					placeholder='Enter your email here' 
					onChange={(e) => this.setState({
						...this.state, mail: e.target.value
					})}
					value={this.state.mail}
				/>
				<Input 
					label='Message' 
					placeholder='Enter your message here' 
					onChange={(e) => this.setState({
						...this.state, message: e.target.value
					})}
					value={this.state.message}
					multiline
				/>
				<Button content='Submit' clickHandler={this.handleSubmit} type='secondary' classes='submit' />
				<p className='heading txt-cen'>OR</p>
				{this.state.data && <Row>
					<Col classes='col-md'>
						<span className='heading'>Write to me</span>
						<span className='value'>{this.state.data.email}</span>
					</Col>
					<Col classes='col-md'>
						<span className='heading end'>Office Address</span>
						<span className='value end'>{this.state.data.addr}</span>
					</Col>
				</Row>}
			</div>
		)
	};
};

export default Contact;