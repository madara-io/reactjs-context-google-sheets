import React, { Component } from "react";
import { AppConsumer } from "../Contexts/AppContext"
import Layout from "../Containers/Layout";
import Title from "../Components/Title";
import { Table } from 'reactstrap';
/**
* Skills
*/
class Skills extends Component {
  render() {
    return (
      <Layout>
        <Title title={`Skills`} />
        <Table hover>
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
              <th>level</th>
            </tr>
          </thead>
          <tbody>
          <AppConsumer>
            {({ skills }) => skills.map((s, k) => {
              return (
                <tr key={k}>
                  <th scope="row">{s.name}</th>
                  <td>{s.body}</td>
                  <td>{s.level}</td>
                </tr>  
              )
            })}
          </AppConsumer>
          </tbody>
        </Table>
      </Layout>
    )
  }
}

export default Skills;