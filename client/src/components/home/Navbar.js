import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// import { postData } from "../../helpers/fetch";
function Navbar({ userData, setUserData }) {
  const history = useHistory();

  return (
    <>
      <Header>
        <h1>Lekki Store</h1>
        {userData.message && (
          <div className="user-message">{userData.message}</div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/products/all">ALL</Link>
            </li>
            <li>
              <Link to="/products/women">WOMEN</Link>
            </li>
            <li>
              <Link to="/products/men">MEN</Link>
            </li>
            <li>
              <Link to="">CART</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
            <li>
              <Link to={!userData.message ? "/login" : "/logout"}>
                {!userData.message ? "LOGIN" : "LOGOUT"}
              </Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

const Header = styled.header`
  /* .user-message {
    margin-left: 14vw;
  } */
  h1 {
    text-align: center;
    margin-top: 5.3rem;
    margin-bottom: 5.3rem;
    font-size: 4rem;
    font-weight: 500;
  }
  nav {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  li {
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    padding: 0 2rem;
    margin-left: 0.3rem;
    a {
      font-size: 1.3rem;
      text-decoration: none;
      color: black;
      &:hover {
        color: #ea5f5f;
        padding-bottom: 0.3rem;
        border-bottom: 2px solid #ccc;
      }
    }
  }
  @media screen and (max-width: 769px) {
    li {
      border: none;
      padding: 0 1rem;
    }
    h1 {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 480px) {
    li {
      padding: 0.3rem;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default Navbar;
