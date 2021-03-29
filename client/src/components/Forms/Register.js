import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./Login";

function Register() {
  return (
    <Form action="">
      <h1>Register</h1>
      <label>
        Firstname
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <label>
        Re-enter Password
        <input type="password" />
      </label>
      <button type="submit">Create your account</button>
      <Link to="/">
        <div className="back">Back</div>
      </Link>
    </Form>
  );
}

export default Register;
