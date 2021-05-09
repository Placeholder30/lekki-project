import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { UserContext } from "../context/Context";
import { LogoutContext, SideBarContext } from "../context/Context";
function MobileNav() {
  const [userData] = useContext(UserContext);
  const handleLogout = useContext(LogoutContext);
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);
  return (
    <List>
      <li
        className="close"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <span className="close-icon">
          <RiCloseLine />
        </span>
      </li>
      <Link
        to="/"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>Home</li>
      </Link>
      <Link
        to="/cart"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>Cart</li>
      </Link>
      <Link
        to="/all"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>All</li>
      </Link>

      <Link
        to="/women"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>Women</li>
      </Link>

      <Link
        to="/men"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>Men</li>
      </Link>

      <Link
        to="/orders"
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <li>Orders</li>
      </Link>
      {!userData.authenticated && (
        <Link
          to="/register"
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          <li>Register</li>
        </Link>
      )}
      {userData.authenticated ? (
        <Link
          // to="/logout"
          onClick={() => {
            handleLogout();
            setShowSideBar(false);
          }}
        >
          <li>Logout</li>
        </Link>
      ) : (
        <Link
          to="/login"
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          <li>Login</li>
        </Link>
      )}
    </List>
  );
}

const List = styled.ul`
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: gray;
  opacity: 0.97;
  color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.5s;

  li {
    list-style: none;
  }
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
  li.close {
    align-self: flex-end;
    margin-top: 2rem;
  }
`;

export default MobileNav;
