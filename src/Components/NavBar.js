/* Calls the React and Route Library to be used */
import React from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";


class NavBar extends React.Component {
	constructor(props) {

		super(props)
		this.state = {
			showbutton : false
		}

		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleSubmit () {
		this.setState({
			showbutton : true
		})
	}

	

	render () {
	return(
		<div>
          <button>
          <Link to="/">Home</Link>
          </button>
          <button>
          <Link onClick = {this.handleSubmit} to="/Product">Shop</Link>
          </button> 
          {this.state.showbutton ? null : null}
        </div>

    )
}
}

export default NavBar