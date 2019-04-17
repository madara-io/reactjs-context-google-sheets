import React, { Component } from "react";
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/**
* NavElem
*/
class NavElem extends Component {
  render() {
    return (
      <NavItem>
        <Link to={this.props.item.link} className="nav-link">{this.props.item.title}</Link>
      </NavItem>
    )
  }
}

export default NavElem;