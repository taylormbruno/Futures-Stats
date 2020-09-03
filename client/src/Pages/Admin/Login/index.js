import React from "react";
import { Container } from "react-bootstrap";
import AdminLoginForm from '../../../Components/AdminLoginForm'
function Login() {
  return (
    <Container>
      <h1> Welcome to the Admin Login Page </h1>
        <AdminLoginForm />
    </Container>
  );
}

export default Login;
