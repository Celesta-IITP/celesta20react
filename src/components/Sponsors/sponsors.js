import React, { Component } from "react";
import abc1 from "../../assets/img/james.jpg";
import abc2 from "../../assets/img/ryan.jpg";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import "./sponsors.css";

class Sponsors extends Component {
  render() {
    return (
      <div className="sp-main">
        <ExamplesNavbar />
        {/*<h1 className="sp-head">Sponsors</h1>*/}
        <div className="sp-slider">
          <h1 className="sp_head2 heading"> OUR SPONSORS! </h1>

          <div className="sp_img ">
            <div>
              <h1 className="heading">Finance Partners</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>

            <div>
              <h1 className="heading">Key Partners</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>

            <div>
              <h1 className="heading">Media Partners</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>

            <div>
              <h1 className="heading">Food Partners</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>

            <div>
              <h1 className="heading">Events Partners</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>

            <div>
              <h1 className="heading">Strategic Sponsors</h1>
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
              <img className="sp pa5" src={abc1} alt="sponsor" />
              <img className="sp pa5" src={abc2} alt="sponsor" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sponsors;
