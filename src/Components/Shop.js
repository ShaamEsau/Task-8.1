/* Calls the React Library to be used  */
import React from 'react';
/* Calls custom component to be used */
import Chairs from "./GamingChairs.js";
import Cases from "./ComputerCases.js";
import Controls from "./GamingControls.js";

const Shop = () => {

	return(

		<div>

			<Chairs/>
			<br/>
			<Cases/>
			<br/>
			<Controls/>

		</div>

	)
}


/* Enables the class to be imported to other Js files */
export default Shop;