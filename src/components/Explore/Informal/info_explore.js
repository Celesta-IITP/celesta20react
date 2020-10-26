import React, { Component } from 'react';
import {info_explore_function} from './info_explore_function';
import './info_explore.css';
import './info_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {InfoCards} from './info_cards'
import axios from 'axios';

class info_explore extends Component {
	state={
		onsite:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		info_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		axios.get('http://localhost:4500/api/events/bytype/onsite/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2h3YW5pIiwic3ViIjoiNWY5MDMwY2EyZjIyYjU0ZTA0NGY2NTQ3IiwiaWF0IjoxNjAzMzA0Njg0OTM5LCJleHAiOjE2MDU4OTY2ODQ5Mzl9.Z-GG5gzl_sFCSpJtB7uNHEzBhiJImgFaxOI0UTNjzs0",
			},
		  })
		  .then((response) => {
			const data = response.data;
			console.log("Data: ", data);
			this.setState({ onsite: data });
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
				<div className="info_cont s--inactive">
				  <div className="info_cont__inner">
				  	<InfoCards events={this.state.onsite} />
				  </div>
				</div>
			</div>
		)
	}
}

export default info_explore;