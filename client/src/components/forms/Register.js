import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postData } from "../../helpers/fetch";
import { Form } from "./Login";

function Register({ setUserData }) {
  const [input, setInput] = useState({});
  const history = useHistory();
  const [errMsg, setErrMsg] = useState(null);

  const handleSubmit = async () => {
    const register = await fetch("/register", {
      ...postData,
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
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Link to="/">
        <h1>Lekki Store</h1>
      </Link>
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
      <Link to="/">
        <div className="back">Back</div>
      </Link>
    </Form>
  );
}

export default Register;
