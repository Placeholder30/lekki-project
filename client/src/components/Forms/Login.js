import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Form action="">
      <h1>Lekki Store</h1>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Login</button>
      <Link to="/">
        <div className="back">Back</div>
      </Link>
    </Form>
  );
}

export default Login;

export const Form = styled.form`
  width: 40rem;
  border: 1px solid #ccc;
  margin: 10rem auto;
  padding: 3rem;
  position: relative;
  * {
    display: block;
  }
  h1 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  label {
    font-size: 1.4rem;
  }
  input {
    width: 100%;
    height: 4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    background-color: white;
  }
  button {
    border: none;
    padding: 1rem 2rem;
    text-decoration: none;
    background-color: #e1bee7;
    font-size: 1.3rem;
    color: black;
    margin: 0 auto;
    cursor: pointer;
  }
  .back {
    position: absolute;
    left: 18rem;
    bottom: 0.3rem;
    color: black;
    &:hover {
      font-size: 1.2rem;
    }
  }
`;
