/* Calls the React and Route Library to be used */
import React from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './App.css';
/* Calls custom component to be used */
import Login from "./Components/Header.js";
import Land from "./Components/Landing.js";
import Shop from "./Components/Shop.js";

/* Create a Class Component */
class App extends React.Component {

	render(){
	/* Executes and displays Data */
	return(

			/* Creates a div box */
			<div>
			{/* Calls the Component */}
			<Login />
				{/* Placeholder for the component links */}
				<BrowserRouter>
				<div>
					{/* Creates an unordered list */}
					<ul>
						{/* Sets the link and path to the component to be displayed when link is clicked on */}
						<Route path = {"/Product"} render = {() => <Link to ="/">Home</Link>} />
						<Route exact = {true} path = {"/"} render = {() => <Link to = "/Product">Product</Link>}/>
					</ul>

						<Route exact = {true} path = {"/"} component = {Land} />
						<Route path = {"/Product"} component = {Shop} />
				</div>
				</BrowserRouter>
			</div>
	)

}

}
/* Enables the class to be imported to other Js files */
export default App;
