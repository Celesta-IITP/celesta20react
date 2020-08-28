import React from "react";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
export default function addEvent() {
  return (
    <div>
      <div>
        <ExamplesNavbar />
      </div>
      <div
        id="register"
        className="register-x"
        style={{ marginTop: "-50px", marginBottom: "50px" }}
      >
        {/*<h1 className="display-3 register-headline">
          Hurry Up and Register Yourself!
        </h1>*/}
        <br />
        <br />
        <div className="form-registration">
          <div className="card card-x">
            <div className="card-body card-bodyx">
              <form>
                <div className="form-group" style={{ fontSize: "20px" }}>
                  <label className="form-label" htmlFor="identityName">
                    Name of the event!
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
                    Description
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
                  <select className="form-control" id="studyCourse" required>
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
    </div>
  );
}
