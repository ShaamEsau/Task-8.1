/* Calls the React Library */
import React from "react";
import ReactDOM from "react-dom";
/* Calls Stlye sheet to customize element */
import '../StoreStyle.css';
/* Calls images from specified directory */
import ComputerCases from "../Images/creeper.jpg";
import { Image } from "react-bootstrap";

/* Creates React Function Component */
const Cases = () =>{
    /* Parses data to  a readable format on the HTML page */
    return(
            /* Creates a div box */
            <div id="prodList">
				{/* Converts text to format heading 2 */}
				<h2 id="Title">Gaming Controls</h2><br/>
					<div>
						{/* Inserts an image using imported data. Use react-bootstrap to style it */}
						<Image id="prodImg" src={ComputerCases} thumbnail/>
						{/* Creates a paragraph to store text and adds a space */}
						<p>
							Assorted Gaming Controls : <br/>
							Price : R1000 - R1500<br/>

							Custom cases available and you can request a unique case provided you have a design for us.<br/>

							Pre-made Cases Available : <br/>
						</p>

						<ul>
								<li> Mincreaft Creeper </li>
								<li> Uncharted </li>
								<li> God of War </li>
						</ul>

					</div>
			</div>
   		)
}


/* Enables the class to be imported to other Js files */
export default Cases;