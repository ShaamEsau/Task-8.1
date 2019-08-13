/* Calls the React Library */
import React from "react";
import ReactDOM from "react-dom";
/* Calls images from specified directory */
import Chair from "../Images/chair.jpg";
import { Image } from "react-bootstrap";

/* Creates React Function Component */
const Chairs = () =>{
    /* Parses data to  a readable format on the HTML page */
    return(
            /* Creates a div box */
            <div id="prodList">
				{/* Converts text to format heading 2 */}
				<h2 id="Title">Gaming Controls</h2><br/>
					<div>
						{/* Inserts an image using imported data. Use react-bootstrap to style it */}
						<Image id="prodImg" src={Chair} thumbnail/>
						{/* Creates a paragraph to store text and adds a space */}
						<p>
							Assorted Gaming Controls : <br/>
							Price : R2000 - R5000

							Gaming Chairs that provides the best comfort when you conquering dungeons or drifting through the road.<br/>

							Chair brands Available : <br/>
						</p>


						<ul>
								<li> Cougar Armour </li>
								<li> VX Gaming </li>
								<li> DXRacer </li>
						</ul>

					</div>
			</div>
   		)
}


/* Enables the class to be imported to other Js files */
export default Chairs;