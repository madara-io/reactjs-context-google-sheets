import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';

import Layout from "../Containers/Layout";

/**
* Home
*/
class Home extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple website with Google Sheets Backend</p>          
        </Jumbotron>
      </Layout>
    )
  }
}

export default Home;