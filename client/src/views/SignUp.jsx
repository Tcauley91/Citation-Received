import React from 'react'
import httpClient from '../httpClient'
import NCJudicialBrandSeal from "../images/NCJudicialBrandSeal.png"


// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', badgeId: '', password: '' }
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
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', badgeId: '', password: '' } })
			if (user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { name, badgeId, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column'>
						<div className='seal'>
							<img src={NCJudicialBrandSeal} alt='seal' />
						</div>
						<div className='loginForm'>
							<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
								<input type="text" placeholder="Name" name="name" value={name} />
								<input type="text" placeholder="Badge Id" name="badgeId" value={badgeId} />
								<input type="password" placeholder="Password" name="password" value={password} />
								<button>Sign Up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp