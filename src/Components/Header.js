/* Retrieves React Library to be used on the page */
import React from "react";
/* Retrieves an image to be used */
import gLogo from "../Images/gLogo.jpg";


/* Creates a function an takes a property an argument and returns the value within an element */
const Welcome = () => {
    return (
        /* Converts text to heading format 4 */
        <h4 id="header"> Welcome Back!</h4>
    );
}


const SignUp = (props) => {
    return (
        <h4 id="header">Sign In</h4>
    );
}

const Greetings = (props) => {
    const isLoggedIn = props.isLoggedIn;

    /* Executes corresponding function if the variable is set to True or False */
    if (isLoggedIn) {
        return <Welcome />;
    }
    return <SignUp />;
}


const LoginButton = (props) => {
    return (
        /* Creates a button with a click event handler */
        <button id="header" onClick = {props.onClick}>
		Login
		</button>
    );
}

const LogoutButton = (props) => {
    return (
        <button id="header" onClick = {props.onClick}>
		Logout
		</button>
    )
}

/* Creates React Class Component */
class LoginControl extends React.Component {
    /* Initiates component properties */
    constructor(props) {
        /* Inherits parent properties */
        super(props);
        /* Sets the initial state of variable to false*/
        this.state = { isLoggedIn: false };
    }


    /* Function loginClick and logOutClick changes the state to either true or false */
    loginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    logOutClick = () => {
        this.setState({ isLoggedIn: false });
    }


    /* Renders the information executed to a readable format on the web page */
    render() {
        /* Creates variables */
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        /* Switches between buttons as the state is changed between true and false */
        if (isLoggedIn) {
            /* Creates a button that executes a function */
            button = <LogoutButton onClick = {this.logOutClick}/>;
        } else {
            button = <LoginButton onClick = {this.loginClick}/>;
        }

        return (
            <div>
			{/* Calls variable to display its element */}
			{button}
			{/* Calls component to display its element and its information */}
			<Greetings id="header" isLoggedIn = {isLoggedIn}/>
			</div>
        );
    }
}

class Login extends React.Component {
    render() {
        return (
        /*Creates a div box*/
       	<div>
	   {/* Calls a components information to be displayed */}
		<LoginControl/>
		<div id="TitleHead">
	   {/* Creates an image tag that displays imported image */}
		<img id="logo" src={gLogo} alt="Logo Image"/>
	   {/* Converts text to heading 1 format */}
		<h1 id="Title">Gamers Playground</h1>
		</div>
		<hr/>
		</div>
        );
    }
}


/* Make the component able to be imported to other files*/
export default Login;