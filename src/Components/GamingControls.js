/* Calls the React Library */
import React from "react";
import ReactDOM from "react-dom";
/* Calls Stlye sheet to customize element */
import '../StoreStyle.css';
/* Calls images from specified directory */
import Control from "../Images/control.jpg";
import { Image } from "react-bootstrap";

/* Creates React Function Component */
const Controls = () =>{
    /* Parses data to  a readable format on the HTML page */
    return(
            /* Creates a div box */
            <div id="prodList">
				{/* Converts text to format heading 2 */}
				<h2 id="Title">Gaming Controls</h2><br/>
					<div>
						{/* Inserts an image using imported data. Use react-bootstrap to style it */}
						<Image id="prodImg" src={Control} thumbnail/>
						{/* Creates a paragraph to store text and adds a space */}
						<p>
							Assorted Gaming Controls : <br/>
							Price : R1500 - R2000 <br/>

							Several gaming controls available with customizable pads and triggers.<br/>

							Controls Available for : <br/>
						</p>

						<ul>
								<li> PlayStation 4 </li>
								<li> XBox One</li>
						</ul>
					</div>
			</div>
   		)
}


/* Enables the class to be imported to other Js files */
export default Controls;