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
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
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
              <h1 className="text-white font-weight-light">About Celesta</h1>
              <p className="text-white mt-4">
              Celesta is the annual Techno-Management Fest of IIT Patna. To promote technical and managerial enthusiasm amongst young and bright minds of our nation and to provide a platform to transform their innovative ideas into a meaningful reality.
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
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
              <br />
              <br />
            </Col>

            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">CA Program</h1>
              <p className="text-white mt-4">
              The Campus Ambassador program is one of the leading publicity programs of Celesta. The promotion of the fest in the respective colleges is assigned to the campus ambassadors. They serve as the intermediaries who bridge the gap between their college and our campus i.e, as a nodal point for any kind of communication or promotion. Campus ambassadors act as the face of one of the biggest techno-management festival in the entire North-East India and are entrusted with the job of increasing the outreach of the fest through on field and social media publicity. The campus ambassadors are entitled to exciting prizes, apart from the coveted certificate and many other goodies.
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
