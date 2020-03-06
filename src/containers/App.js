import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
						robots: [], 
						searchString: '' 
					}
	}

	//Component Did mount method 
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}));
	}

	//Function to change the searchString value called from the input box
	onSearchChange = (event)=>{
		this.setState({searchString: event.target.value})
	}
	render(){
		const filterRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchString.toLowerCase());
		})
		if(this.state.robots.length === 0 ){
			return <h1 className="tc"> Loading </h1>
		}
		else{
			return(
				<div className="tc ">
					<h1 className="f1">RoboFriends</h1>
				{/*SearchBox component gets the onSearchChange function as a prop along with the searchString prop*/}
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filterRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}	
	}	
}

export default App;