import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { AppConsumer } from "../Contexts/AppContext"
import Layout from "../Containers/Layout";
import Title from "../Components/Title";
import Post from "../Components/Post";
/**
* Blog
*/
class Blog extends Component {
  render() {
    return (
      <Layout>
        <Title title={`Blog`} />
        <Row>
          <AppConsumer>
            {({ blog }) => blog.map((p, k) => {
              return (
                <Col key={k} lg={4}>
                  <Post post={p} />
                </Col>
              )
            })}
          </AppConsumer>
        </Row>
      </Layout>
    )
  }
}

export default Blog;