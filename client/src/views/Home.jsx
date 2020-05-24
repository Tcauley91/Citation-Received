import React from 'react'
import '../css/home.css'
import  NCJudicialBrandSeal from "../images/NCJudicialBrandSeal.png"

const Home = (props) => {
	return (
		<div className='background'>
			<div className='homeImage'>
				<img src={NCJudicialBrandSeal} alt='seal' />
			</div>
		</div>
	)
}

export default Home