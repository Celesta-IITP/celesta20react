import React, { Component } from "react";
import { gam_explore_function } from "./gamiacs_explore_function";
import "./gamiacs_explore.css";
import "./gamiacs_explore_main.css";
import { BackToEvents } from "../../_BackToEvents/BackToEvents";
import { GamiacCards } from "./gamiacs_cards";
import axios from "axios";

class gamiacs_explore extends Component {
  state = {
    gamiacs: [],
  };
  // constructor(props){
  // 	super(props);
  // }

  componentDidMount() {
    gam_explore_function();
    this.getEvents();
  }

  getEvents = () => {
    axios
      .get("http://localhost:4500/api/events/bytype/gamiacs/detailed/", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhc2h3YW5pIiwic3ViIjoiNWY5NzE3YmMwMGExNTQyOWM0ZDg4YTA5IiwiaWF0IjoxNjAzNzM3NTY1NzkwLCJleHAiOjE2MDYzMjk1NjU3OTB9.YDXG_RzlU3WLd1agbZFfEV982EJjobmCQjdHb61vk1s",
        },
      })
      .then((response) => {
        const data = response.data;
        this.setState({ gamiacs: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  render() {
    return (
      <div>
        <BackToEvents />
        <div className="gam_cont s--inactive">
          <div className="gam_cont__inner">
            <GamiacCards events={this.state.gamiacs} />
          </div>
        </div>
      </div>
    );
  }
}

export default gamiacs_explore;
