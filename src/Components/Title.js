import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
/**
* Title
*/
class Title extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h1>{this.props.title}</h1>
          <hr />
        </Col>
      </Row>
    )
  }
}

export default Title;