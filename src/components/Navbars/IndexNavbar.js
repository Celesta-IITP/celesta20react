/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_3.png";

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info",
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent",
      });
    }
  };

  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <header className="cd-header">
            <div className="cd-logo">
              <Link to="/">
                <img src={logo} alt="Logo" style={{ maxHeight: "45px" }} />
              </Link>
            </div>

            <nav>
              <ul className="cd-secondary-nav">
                <li>
                  <Link to="/signin-page">Login</Link>
                </li>
                <li>
                  <Link to="/register-page">Register</Link>
                </li>
              </ul>
            </nav>

            <div class="nav-but-wrap">
              <div class="menu-icon hover-target">
                <span class="menu-icon__line menu-icon__line-left"></span>
                <span class="menu-icon__line"></span>
                <span class="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </header>

          <nav>
            <ul className="cd-primary-nav">
              <li>
                <Link to="/index">Home</Link>
              </li>
              <li>
                <Link to="/ca">Campus Ambassador</Link>
              </li>

              <li>
                <Link to="/events-page">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/sponsors">Sponsors</Link>
              </li>

              <li>
                <Link to="/contact-us-page">Contact-Us</Link>
              </li>

              <li>
                <a href="#0">Start a project</a>
              </li>
              <li>
                <a href="#0">Join In</a>
              </li>
              <li>
                <a href="#0">Create an account</a>
              </li>

              <li className="cd-label">Follow us</li>

              <li className="cd-social cd-facebook">
                <a href="#0">Facebook</a>
              </li>
              <li className="cd-social cd-instagram">
                <a href="#0">Instagram</a>
              </li>
              <li className="cd-social cd-dribbble">
                <a href="#0">Dribbble</a>
              </li>
              <li className="cd-social cd-twitter">
                <a href="#0">Twitter</a>
              </li>
            </ul>
          </nav>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
