import React from 'react'
import httpClient from '../httpClient'
import NCJudicialBrandSeal from "../images/NCJudicialBrandSeal.png"


class LogIn extends React.Component {
	state = {
		fields: { badgeId: '', password: '' }
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
			this.setState({ fields: { badgeId: '', password: '' } })
			if (user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { badgeId, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Badge Id" name="badgeID" value={badgeId} />
							<input type="password" placeholder="Password" name="password" value={password} />
							<button>Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn
