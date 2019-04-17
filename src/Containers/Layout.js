import React, { Component } from "react";
import { Container } from 'reactstrap';
import NavBar from "./NavBar";
import Footer from "../Components/Footer";

/**
* Layout
*/
class Layout extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        {this.props.children}
        <Footer />
      </Container>
    )
  }
}

export default Layout;