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
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
    {
      src: require("assets/img/denys.jpg"),
      altText: "Slide 1",
      caption: "Big City Life, United States"
    },
    {
      src: require("assets/img/fabien-bazanegue.jpg"),
      altText: "Slide 2",
      caption: "Somewhere Beyond, United States"
    },
    {
      src: require("assets/img/mark-finn.jpg"),
      altText: "Slide 3",
      caption: "Stocks, United States"
    }
  ];
  
  let ps = null;

class StepWise extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        demoModal: false,
        miniModal: false,
        formModal: false
      };
    }
    toggleModal = modalState => {
      this.setState({
        [modalState]: !this.state[modalState]
      });
    };
    render(){
        return(
          <div className="section">
          <Container>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  About Celesta
                </h1>
                <p className="text-white mt-4">
                  Black Design comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
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
                /><br /><br />
              </Col>
              
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  CA Program
                </h1>
                <p className="text-white mt-4">
                  Black Design comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
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