import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { AppConsumer } from "../Contexts/AppContext"
import NavElem from "../Components/NavElem";
/**
* NavBar
*/
class NavBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <AppConsumer>
        {({ navbarItem }) => {
          return (
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Madara</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {navbarItem.map((n, k) => {
                    return <NavElem key={k} item={n} />
                  })}
                </Nav>
              </Collapse>
            </Navbar>
          )
        }}
      </AppConsumer>

    )
  }
}

export default NavBar;