import { Link } from "react-router-dom";
import styled from "styled-components";

function MobileNav({ setShowSideBar }) {
  return (
    <List>
      <li
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        X
      </li>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="/all">
        <li>All</li>
      </Link>

      <Link to="/women">
        <li>Women</li>
      </Link>

      <Link to="/men">
        <li>Men</li>
      </Link>

      <Link to="/orders">
        <li>Orders</li>
      </Link>
      <Link to="/register">
        <li>Register</li>
      </Link>
      <Link to="/login">
        <li>Login</li>
      </Link>
    </List>
  );
}

const List = styled.ul`
  width: 30vw;
  background-color: gray;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  li {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export default MobileNav;
