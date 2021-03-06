import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar'>
			{props.currentUser
				? (
					<span>
						<Link to="/Search">Search Citations</Link>
						<Link to="/logout">Log Out</Link>
					</span>
				)
				: (
					<span>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</span>
				)
			}
		</div>
	)
}

export default NavBar