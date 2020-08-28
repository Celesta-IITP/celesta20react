import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_3.png";
import { compose } from "redux";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions";
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
      userInfo: this.props.user ? this.props.user : {},
      color: "navbar-transparent",
    };
  }

  componentDidMount() {
    console.log(this.state.userInfo);
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log("Props changed");
    return nextProps.user !== this.state.userInfo;
  }*/
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
  logoutHandler = (e) => {
    this.props.logoutUser();
    /*this.props.history.push("/");*/
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

            {Object.keys(this.state.userInfo).length !== 0 ? (
              <nav>
                <ul className="cd-secondary-nav">
                  {this.state.userInfo.isAdmin ? (
                    <li>
                      <Button>
                        <Link to="/events/add">Add an event!</Link>
                      </Button>
                    </li>
                  ) : (
                    <Button>
                      <Link to="/events-page">Events</Link>
                    </Button>
                  )}
                  <li>
                    <Button>
                      <Link to="/profile-page">{this.state.userInfo.name}</Link>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={this.logoutHandler}>
                      <Link to="/signin-page">Logout</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            ) : (
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
            )}
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

              {Object.keys(this.state.userInfo).length !== 0 ? (
                <nav>
                  <ul className="cd-secondary-nav">
                    <li>
                      <Button onClick={this.logoutHandler}>
                        <Link to="/signin-page">Logout</Link>
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Link to="/profile-page">
                          {this.state.userInfo.name}
                        </Link>
                      </Button>
                    </li>
                    {this.state.userInfo.isAdmin ? (
                      <li>
                        <Button>
                          <Link to="/events/add">Add an event!</Link>
                        </Button>
                      </li>
                    ) : (
                      <Button>
                        <Link to="/events-page">Events</Link>
                      </Button>
                    )}
                  </ul>
                </nav>
              ) : (
                <ul>
                  <li>
                    <Link to="/signin-page">Login</Link>
                  </li>
                  <li>
                    <Link to="/register-page">Register</Link>
                  </li>
                </ul>
              )}

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
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.error,
});
export default compose(connect(mapStateToProps, { logoutUser }))(
  ComponentsNavbar
);
//export default ComponentsNavbar;
