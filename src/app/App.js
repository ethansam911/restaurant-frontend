//Imports for CSS & modules
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Imports for components
import Home from '../components/views/Home';
import AccountInfo from '../components/views/AccountInfo';
import Signin from '../components/views/Signin';
//Added for cart view
import Cart from '../components/views/Cart'; 

class App extends Component {
    render() {
	console.log(this.props.menu);
	return (
	    
		<Router>
		<Switch>
                <Route exact path="/" render={() => <Home/>} />
                <Route exact path="/AccountInfo" render={() => <AccountInfo/>} />
                <Route exact path="/Cart" render={() => <Cart />} />
		<Route exact path="/Signin" render={() => <Signin />} />
		</Switch>
		</Router>
	);
    }
}

function mapState(state) {
    return {
	menu: state.menu
    };
}

function mapDispatch(dispatch) {
    return { };
}

export default connect(mapState,null)(App);
