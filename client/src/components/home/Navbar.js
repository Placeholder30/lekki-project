import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <Header>
        <h1>Lekki Store</h1>
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ALL</a>
            </li>
            <li>
              <a href="/">WOMEN</a>
            </li>
            <li>
              <a href="/">CART</a>
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
    width: 33.333%;
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
      }
    }
  }
`;

export default Navbar;
