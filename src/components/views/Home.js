import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from './Navbar';
import { fetchMenuThunk } from '../../thunks';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	this.props.fetchMenu();
	console.log(this.props.menu);
    }
    
    render() {
	console.log(this.props.menu);
	return(
		<div>
		<Navbar />


		<div id="menu">
		<h1>MENU</h1>
		{this.props.menu.map( (item) => (
			<div className="menu-card" key={item.id}>
			<h3>{item.item}</h3>
			<img className="crop"src={item.imageUrl} alt={item.item}/>
			<p style={{textAlign:'left', marginLeft: '5%'}}><b><u>Description:</u></b><br/> {item.description}</p>

			
		    	<div className="bottom-right">
			${item.price}
			<input className="amount" type="number" min='0' max='99'></input>
			<img src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart"/></div>
			</div>

		))}
		 
	    </div>
		
            </div>
	);
    }   
}

function mapState(state){
    return {
	menu: state.menu
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
	fetchMenu: () => dispatch(fetchMenuThunk())
    }
}

export default connect(mapState, mapDispatch)(Home);
