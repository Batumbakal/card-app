import React  from 'react';
import {CardList} from './components/card-list/card-list.comp';
import {Search} from './components/search-box/search.comp';
import './App.css';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			members: [],
			sources: [
				'profile-icon/p1.png',
				'profile-icon/p2.png',
				'profile-icon/p3.png',
				'profile-icon/p4.png',
				'profile-icon/p5.png',
				'profile-icon/p6.png',
				'profile-icon/p7.png',
				'profile-icon/p8.png',
				'profile-icon/p9.png',
				'profile-icon/p10.png'
			],
			searchVal: ""
		};
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(member => this.setState({members:member}));
	}
	
	render(){
		const { members, sources, searchVal} = this.state;
		const searchFilter = members.filter(member => member.name.toLowerCase().includes(searchVal.toLowerCase()));
		return (
			<div className="app">
				<h1>Our Staff</h1>
				<Search placeholder="Search for a Member" searchAction={e => this.setState({searchVal: e.target.value})}/>
				<CardList members={searchFilter} imgsrcs={sources}/>
			</div>
		);
	}
}

export default App;