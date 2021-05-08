import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
function MobileNav({ setShowSideBar }) {
  return (
    <List>
      <li
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <span className="close-icon">
          <RiCloseLine />
        </span>
      </li>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
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
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: gray;
  opacity: 0.8;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.5s;
  a {
    li {
      font-size: 2rem;
      margin: 2rem auto;
      text-align: center;
    }
  }
  li span.close-icon svg {
    font-size: 3rem;
    width: 5rem;
    color: black;
  }
`;

export default MobileNav;
