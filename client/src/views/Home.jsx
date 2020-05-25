import React from 'react'
import '../css/home.css'
import NCJudicialBrandSeal from "../images/NCJudicialBrandSeal.png"
import { Link } from 'react-router-dom'

const Home = (props) => {
	return (
		<div className='background'>
			<div className='homeImage'>
				<img src={NCJudicialBrandSeal} alt='seal' />
			</div>
			<div >
				<Link to="/login">
					<button type="button" className='selBtn2'>
						Login
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Home