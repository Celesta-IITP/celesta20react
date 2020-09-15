import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
//import '../../assets/css/event.css';

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
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
      src: require('../../assets/img/homeassets/1566790917_Um2lHl_events.jpg'),
      altText: "Slide 1",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/a.jpg'),
      altText: "Slide 2",
      caption: ""
    },
    {
      src: require('../../assets/img/homeassets/DpUu723VsAA_zpM (1).jpg_large'),
      altText: "Slide 3",
      caption: ""
    }
  ];

class EventSlider extends React.Component{
    render(){
        return(
            <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container>
                <br />
                <br />
                <br />
                <h1 align="center">
                    {/* Events */}
                </h1>
                <Row>
                    <Col lg="2">

                    </Col>
                    <Col lg="8">
                    <UncontrolledCarousel
                        items={carouselItems}
                        indicators={false}
                        autoPlay={false}
                    />
                    </Col>
                    <Col lg="2">
                        
                    </Col>
                </Row>
            </Container>
			</div>
        );
    }
}

export default EventSlider;