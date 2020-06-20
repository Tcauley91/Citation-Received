import React from 'react'
import httpClient from '../httpClient'
import NCJudicialBrandSeal from "../images/NCJudicialBrandSeal.png"
import '../styles/login.css'


class LogIn extends React.Component {
	state = {
		fields: { email: '', password: '' }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if (user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column'>
						<div className='homeImage'>
							<img src={NCJudicialBrandSeal} alt='seal' />
						</div>
						<div className='homeHeader'>
							<h3 className='homeTitle'>Welcome to Citation Reveived</h3>
						</div>
						<div className='loginForm'>
							<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
								<input type="text" placeholder="Email" name="email" value={email} />
								<input type="password" placeholder="Password" name="password" value={password} />
								<button>Log In</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn