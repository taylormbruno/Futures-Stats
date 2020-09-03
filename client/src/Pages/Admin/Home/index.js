import React from "react";
import { Container } from "react-bootstrap";
import AdminCreateBlog from '../../../Components/AdminCreateBlog'

function Home(){
    return (
      <Container>
        <h1> Welcome to the Admin Home Page </h1>
        <AdminCreateBlog />
      </Container>
    );
}

export default Home;