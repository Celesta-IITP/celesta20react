import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src:
      "https://static.dribbble.com/users/5462144/screenshots/11961113/media/4841dad66f05d4e477b729b2ff59a19e.jpg",
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src:
      "https://www.startus.cc/sites/default/files/styles/company_profile_gallery_image/public/company-profile-gallery/whatsapp_image_2019-12-10_at_15.51.14.jpeg?itok=zyDIyTXm",
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: "https://pbs.twimg.com/media/DpUu723VsAA_zpM.jpg:large",
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

class StepWise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false,
    };
  }
  toggleModal = (modalState) => {
    this.setState({
      [modalState]: !this.state[modalState],
    });
  };
  render() {
    return (
      <div className="section bg">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1
                className="text-white font-weight-light"
                style={{ fontSize: "30px" }}
              >
                About Celesta
              </h1>

              <p className="text-white mt-4">
                Celesta is the annual Techno-Management Fest of IIT Patna. To
                promote technical and managerial enthusiasm amongst young and
                bright minds of our nation and to provide a platform to
                transform their innovative ideas into a meaningful reality.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
              >
                Aftermovie
              </Button>

              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
              >
                Bus Schedule
              </Button>
              <br />
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="6">
              <div className="img1">
                <img
                  src="https://scontent.fymy1-2.fna.fbcdn.net/v/t1.0-9/s720x720/101978522_3872924689389511_4004849801412739072_o.jpg?_nc_cat=110&_nc_sid=110474&_nc_eui2=AeEXr0cW4bXjRFxI-RrAL8GvRBEGVoeD7J9EEQZWh4Psn5AA47NMmUJPYV2OVsZc5dY&_nc_ohc=NVTwC6tToNgAX92yM8i&_nc_ht=scontent.fymy1-2.fna&_nc_tp=7&oh=032bcdb75bfb8087fc3cc18ab1ec9191&oe=5F4A6300"
                  rounded
                />
              </div>{" "}
              <br />
              <br />
            </Col>

            <Col className="mb-5 mb-lg-0" lg="5">
              <h1
                className="text-white font-weight-light"
                style={{ fontSize: "30px" }}
              >
                CA Program
              </h1>
              <p className="text-white mt-4">
                The Campus Ambassador program is one of the leading publicity
                programs of Celesta. The promotion of the fest in the respective
                colleges is assigned to the campus ambassadors. They serve as
                the intermediaries who bridge the gap between their college and
                our campus i.e, as a nodal point for any kind of communication
                or promotion. Campus ambassadors act as the face of one of the
                biggest techno-management festival in the entire North-East
                India and are entrusted with the job of increasing the outreach
                of the fest through on field and social media publicity. The
                campus ambassadors are entitled to exciting prizes, apart from
                the coveted certificate and many other goodies.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
              >
                Register
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StepWise;
