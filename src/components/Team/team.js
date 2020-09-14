import React from "react";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon, MDBBtn,MDBContainer,MDBBox } from "mdbreact";
import  "./team.css";

// import {MDBAvatar } from "mdbreact" ;

const TeamPage = () => {
  return (
    <div className="aqua-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
    <Navbar />
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h1 className="h1-responsive font-weight-bold my-5" style = {{fontSize : "100px"}}>
            WEB TEAM
          </h1>
          <p className="grey-text w-responsive mx-auto mb-5">
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              
              <MDBBox
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Maria Kate
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-dribbble"
              >
                <MDBIcon fab icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
              <h6 className="text-uppercase grey-text mb-3">
                Front-end Developer
              </h6>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-email"
              >
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Sarah Melyah
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                <MDBIcon fab icon="pinterest" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          
        </MDBCardBody>
      </MDBCard>
      <Footer />
      </div>
  );
}

export default TeamPage;