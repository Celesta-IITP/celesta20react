import React, { Component } from 'react';
import {man_explore_function} from './man_explore_function';
import './man_explore.css';
import './man_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {ManCards} from './man_cards'
import axios from 'axios';

class man_explore extends Component {
	state={
		managerial:[]
	}
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		man_explore_function();
		this.getEvents();
	}

	getEvents = () => {
		axios.get('http://localhost:4500/api/events/bytype/managerial/detailed/',{
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2h3YW5pIiwic3ViIjoiNWY5MDMwY2EyZjIyYjU0ZTA0NGY2NTQ3IiwiaWF0IjoxNjAzMzA0Njg0OTM5LCJleHAiOjE2MDU4OTY2ODQ5Mzl9.Z-GG5gzl_sFCSpJtB7uNHEzBhiJImgFaxOI0UTNjzs0",
			},
		  })
		  .then((response) => {
			const data = response.data;
			this.setState({ managerial: data });
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
				
			 <div className="man_cont s--inactive">
			  <div className="man_cont__inner">
			  	<ManCards events={this.state.managerial} />
			  </div>
				</div>
			</div>
		)
	}
}

export default man_explore;