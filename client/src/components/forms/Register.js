import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { requestOptions } from "../../helpers/fetch";
import { UserContext } from "../context/Context";
import { Form } from "./Login";
import styled from "styled-components";

function Register() {
  const [input, setInput] = useState({});
  const [userData, setUserData] = useContext(UserContext);
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(null);
  const { REACT_APP_BACKEND } = process.env;

  const handleSubmit = async () => {
    const register = await fetch(`${REACT_APP_BACKEND}/register`, {
      ...requestOptions,
      body: JSON.stringify(input),
    });
    if (register.status === 200) {
      const result = await register.json();
      setUserData(result);
      history.push("/");
    } else {
      const result = await register.json();
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
          handleSubmit();
        }}
      >
        <h2>Create account</h2>

        <label>
          Firstname
          <input
            type="text"
            required
            name="firstName"
            onChange={(e) =>
              setInput((state) => ({ ...state, firstName: e.target.value }))
            }
          />
        </label>
        <label>
          Lastname
          <input
            type="text"
            name="lastName"
            onChange={(e) =>
              setInput((state) => ({ ...state, lastName: e.target.value }))
            }
          />
        </label>
        <label>
          Email
          <input
            type="email"
            required
            name="email"
            onChange={(e) =>
              setInput((state) => ({ ...state, email: e.target.value }))
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            required
            name="password"
            onChange={(e) =>
              setInput((state) => ({ ...state, password: e.target.value }))
            }
          />
        </label>
        <label>
          Re-enter Password
          <input
            type="password"
            required
            name="password2"
            onChange={(e) =>
              setInput((state) => ({ ...state, password2: e.target.value }))
            }
          />
        </label>
        {errMsg && <span className="err-msg">{errMsg.message}</span>}
        <button type="submit">Create your account</button>
      </Form>
    </>
  );
}

const Logo = styled.h1`
  width: 30rem;
  text-align: center;
  margin: 3.3rem auto 3rem;
  font-size: 4rem;
  font-weight: 400;
`;

export default Register;
