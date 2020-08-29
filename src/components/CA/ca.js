import React, { Component, Link } from "react";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import Loader from "../Loader/loader";
import "./ca.css";
// import { contactFunctions } from "./caFunctions";
/*class Ca extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}*/
class CA extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ca">
          {/* home section */}
          {/*<div>
            <img
              src={require("../../assets/img/astronaut.png")}
              alt=""
              className="astronaut1"
            />
          </div>*/}

          <div id="homeSection" className="homes">
            <h1 className="display-3 main-headline">
              Join CELESTA'20 Campus Ambassador Program
            </h1>
            <p className="abt-headline">
              Indian Institute Of Technology Patna is bringing forward it’s very
              own techno-management fest, <strong>CELESTA-20</strong>. Be the
              face of the innovation in your college. Inspire your friends to
              take part in the exciting events, be the leader!!
            </p>
            <br />
            <a href="#register" className="btn btn-outline-dark register-btn">
              {" "}
              Register Now{" "}
            </a>
          </div>
          {/* home section ends here */}
          {/* features start here */}
          <div id="features" className="features-x">
            <h1 className="display-3 features-headline">Why Become the CA?</h1>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/skills.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Skill Improvement</h4>
                  <p className="about-tbl">
                    It will help you to improve your managerial as well as
                    communication skills.
                  </p>
                </div>
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/networks.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Networking</h4>
                  <p className="about-tbl">
                    By communicating with many people it will increase your
                    contacts which will help you in future.
                  </p>
                </div>
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/recognition.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Recognition</h4>
                  <p className="about-tbl">
                    You are getting to represent your college at a higher level.
                  </p>
                </div>
              </div>
            </div>

            <br />
          </div>
          {/* features ends here */}
          {/* registration section start here */}
          <div id="register" className="register-x">
            <h1 className="display-3 register-headline">
              Hurry Up and Register Yourself!
            </h1>
            <br />
            <br />
            <div className="form-registration">
              <div className="card card-x">
                <div className="card-body card-bodyx">
                  <form>
                    <div className="form-group" style={{ fontSize: "20px" }}>
                      <label className="form-label" htmlFor="identityName">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="identityName"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inputEmail">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="mobileNum">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobileNum"
                        pattern="^\d{10}$"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="colgName">
                        College/University NAME
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="colgName"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="colgCity">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="colgCity"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="colgStrentg">
                        Total Student Strength of your Institution(approx)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="colgStrentg"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="studyCourse">
                        Course of Study
                      </label>
                      <select
                        className="form-control"
                        id="studyCourse"
                        required
                      >
                        <option>B.Tech/B.E.</option>
                        <option>M.Tech/M.E.</option>
                        <option>BCA</option>
                        <option>MCA</option>
                        <option>BBA</option>
                        <option>MBA</option>
                        <option>B.Sc</option>
                        <option>B.Arch</option>
                        <option>BA</option>
                        <option>BCom.</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="dept">
                        Department
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dept"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="yos">
                        Year Of Study
                      </label>
                      <select className="form-control" id="yos" required>
                        <option>1st year</option>
                        <option>2nd year</option>
                        <option>3nd year</option>
                        <option>4th year</option>
                        <option>5th year</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cop">
                        Contact Point - Gen. Secretary/President/Head Student
                        Authority of Student Body
                      </label>
                      <textarea
                        type="text"
                        rows={2}
                        className="form-control"
                        id="cop"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="porh">
                        Positions of Responsibility Held
                      </label>
                      <textarea
                        type="text"
                        rows={2}
                        className="form-control"
                        id="porh"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="whyHro">
                        Why Do You Want to join as CELESTA Campus Ambassador?
                      </label>
                      <textarea
                        type="text"
                        rows={4}
                        className="form-control"
                        id="whyHro"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="knoUCHP">
                        How did you came to know about CELESTA Campus Ambassador
                        Program?
                      </label>
                      <select className="form-control" id="knoUCHP" required>
                        <option>CELESTA Official FB Page</option>
                        <option>CELESTA Official Website</option>
                        <option>CELESTA Representatives</option>
                        <option>CELESTA Campus Ambassador Poster</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-register btn-lg btn-block"
                      onclick="register()"
                    >
                      Register!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end of registration section here */}
        </div>
      </div>
    );
  }
}

export default CA;
