import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar({ userData, setUserData, cart }) {
  console.log(cart);
  return (
    <>
      <Header>
        <h1>Lekki Store</h1>
        {userData.authenticated && (
          <div className="user-message">{userData.message}</div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/all">ALL</Link>
            </li>
            <li>
              <Link to="/women">WOMEN</Link>
            </li>
            <li>
              <Link to="/men">MEN</Link>
            </li>
            <li className="cart">
              {cart && <span className="no-in-cart">{cart.length}</span>}
              <Link to="/cart">CART</Link>
            </li>
            <li>
              <Link to="/register">REGISTER</Link>
            </li>
            <li>
              <Link to={userData.authenticated ? "/logout" : "/login"}>
                {userData.authenticated ? "LOGOUT" : "LOGIN"}
              </Link>
            </li>
          </ul>
        </nav>
      </Header>
    </>
  );
}

const Header = styled.header`
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
  li.cart {
    position: relative;
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
  .no-in-cart {
    text-align: center;
    padding-top: 0.3rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 1.5rem;
    background-color: black;
    bottom: 1.7rem;
    left: 60%;
    color: white;
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
