import React, { Component } from 'react';
import {online_explore_function} from './online_explore_function';
import './online_explore.css';
import './online_explore_main.css';
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {OnlineCards} from './online_cards'
import axios from 'axios';

class online_explore extends Component {
	state={
		online:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount = () => {
		online_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		axios.get('http://localhost:4500/api/events/bytype/online/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2h3YW5pIiwic3ViIjoiNWY5MDMwY2EyZjIyYjU0ZTA0NGY2NTQ3IiwiaWF0IjoxNjAzMzA0Njg0OTM5LCJleHAiOjE2MDU4OTY2ODQ5Mzl9.Z-GG5gzl_sFCSpJtB7uNHEzBhiJImgFaxOI0UTNjzs0",
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ online: data });
			console.log('Data has been received!!');
			
		  })
		  .catch(() => {
			alert('Error retrieving data!!!');
		  });
	}

	render() {
		return (
			<div>
				<BackToEvents/>
				
				<div className="online_cont s--inactive">
					  <div className="online_cont__inner">
					  	
					  	<OnlineCards events={this.state.online} />
					  </div> 
					  
				</div>
			</div>
		)
	}
}

export default online_explore;