import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
/**
* Post
*/
class Post extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <h2>{this.props.post.title}</h2>
          </CardTitle>
          <CardText>{this.props.post.bodyshort}</CardText>
          <Link to={`/blog/${this.props.post.title}`}>Show more</Link>
        </CardBody>
      </Card>
    )
  }
}

export default Post;