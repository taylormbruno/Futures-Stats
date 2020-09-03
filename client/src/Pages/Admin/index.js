import React from "react";
import { Container } from "react-bootstrap";
import Home from './Home';
import Login from './Login';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: true };
  }
  render() {
    return (
      <Container>
        {this.state.auth ? <Home /> : <Login />}
      </Container>
    );
  }
}

export default Admin;
