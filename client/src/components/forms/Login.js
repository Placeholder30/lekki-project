import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { requestOptions } from "../../helpers/fetch";
import { UserContext } from "../context/Context";

function Login() {
  const [input, setInput] = useState({});
  const [userData, setUserData] = useContext(UserContext);
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(null);
  const { REACT_APP_BACKEND } = process.env;

  const handleLogin = async () => {
    const login = await fetch(`${REACT_APP_BACKEND}/login`, {
      ...requestOptions,
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
    <>
      <Link to="/">
        <Logo>Lekki Store</Logo>
      </Link>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <h2 className="heading">Login</h2>

        <label>
          Email
          <input
            tabIndex="0"
            type="email"
            name="email"
            required
            onChange={(e) => {
              setErrMsg(null);
              setInput((state) => ({ ...state, email: e.target.value }));
            }}
          />
        </label>
        <label>
          Password
          <input
            tabIndex="0"
            type="password"
            name="password"
            required
            onChange={(e) => {
              setErrMsg(null);
              setInput((state) => ({ ...state, password: e.target.value }));
            }}
          />
        </label>

        {errMsg && <span className="err-msg">{errMsg.message}</span>}

        <button type="submit">Login</button>
        <Link to="/"></Link>
      </Form>
    </>
  );
}

export default Login;

export const Form = styled.form`
  width: 45rem;
  border: 1px solid #ccc;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 2.5rem;
  position: relative;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
  * {
    display: block;
  }

  h2 {
    text-decoration: none;
    font-size: 2.6rem;
    margin-bottom: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
  label {
    font-size: 1.5rem;
    font-weight: 500;
  }
  input {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    font-size: 1.7rem;
    background-color: white;
    outline: none;
    border-radius: 3px;
    &:focus {
      border: 1px solid #d96528;
      box-shadow: 1px 1px 3px 1px #d96528;
    }
  }

  button {
    width: 100%;
    border: none;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 3px;
    background-color: #d96528;
    font-size: 1.5rem;
    color: black;
    margin: 3rem auto;
    cursor: pointer;
    &:hover {
      /* background-color: #d96528; */
    }
  }

  .err-msg {
    color: red;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    width: 30rem;
    .back {
      left: 13rem;
    }
  }
`;
export const Logo = styled.h1`
  width: 30rem;
  text-align: center;
  margin: 3.3rem auto 3rem;
  font-size: 4rem;
  font-weight: 400;
`;
