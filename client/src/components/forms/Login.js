import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { postData } from "../../helpers/fetch";

function Login({ setUserData, userData }) {
  const [input, setInput] = useState({});
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(null);

  const handleLogin = async () => {
    const login = await fetch("/login", {
      ...postData,
      body: JSON.stringify(input),
    });
    if (login.status === 200) {
      const result = await login.json();
      setUserData(result);
      history.push("/");
    } else {
      const result = await login.json();
      setErrMsg(result);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <Link to="/">
        <h1 className="heading">Lekki Store</h1>
      </Link>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          onChange={(e) =>
            setInput((state) => ({ ...state, email: e.target.value }))
          }
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          onChange={(e) =>
            setInput((state) => ({ ...state, password: e.target.value }))
          }
        />
      </label>

      {errMsg && <span className="err-msg">{errMsg.message}</span>}

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
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  * {
    display: block;
  }
  h1 {
    text-decoration: none;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    font-weight: 500;
    text-decoration: none !important;
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
    &:hover {
      background-color: #d96528;
    }
  }
  .back {
    position: absolute;
    left: 18rem;
    bottom: 0.3rem;
    color: blueviolet;
    &:hover {
      font-size: 1.2rem;
    }
  }
  .err-msg {
    color: red;
  }
  @media screen and (max-width: 500px) {
    width: 30rem;
    .back {
      left: 13rem;
    }
  }
`;
