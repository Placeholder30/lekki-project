import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CartContext,
  UserContext,
  LogoutContext,
  SideBarContext,
} from "../context/Context";
import Dropdown from "./Dropdown";
function Navbar() {
  const [cart] = useContext(CartContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData] = useContext(UserContext);
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);
  const handleLogout = useContext(LogoutContext);
  return (
    <>
      <Header>
        <Link to="/">
          <h1>Lekki Store</h1>
        </Link>

        <nav>
          <ul>
            {userData.authenticated && (
              <li className="user">{`Hi, ${userData.firstName}`}</li>
            )}
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
              {cart && cart.length ? (
                <span className="no-in-cart">{cart.length}</span>
              ) : null}
              <Link to="/cart">CART</Link>
            </li>
            <div
              className="hamburger-menu"
              onClick={() => {
                setShowSideBar(true);
              }}
            >
              <RiMenuLine />
            </div>
            <li className="user-message">
              {userData && userData.firstName ? (
                `Hi, ${userData.firstName}`
              ) : (
                <Link to="/login">LOGIN</Link>
              )}
              <RiArrowDropDownLine
                className="drop-down-icon"
                onMouseEnter={() => {
                  setShowDropdown(true);
                }}
                onClick={() => {
                  setShowDropdown(true);
                }}
              />
              {showDropdown && (
                <Dropdown
                  setShowDropdown={setShowDropdown}
                  handleLogout={handleLogout}
                />
              )}
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
    margin-top: 3.3rem;
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
    font-size: 1.3rem;
    padding: 0 2rem;
    margin-left: 0.3rem;
    display: flex;
    a {
      font-size: 1.3rem;
      text-decoration: none;
      color: black;
      &:hover {
        color: #ea5f5f;
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
  li.user-message {
    position: relative;
    /* border: none; */
  }
  li.user{
    display:none;
  }
  li.user-message div.drop-down {
    position: absolute;
    top: 2.9rem;
    left: 1.2rem;
    width: 12rem;
    background-color: whitesmoke;
    border-radius: 2px;
    div {
      padding: 1rem;
      font-size: 1.4rem;
    }
  }
  .drop-down-icon {
    font-size: 2rem;
    width: 3rem;
  }
.hamburger-menu{
  display: none;
  &:hover{
    cursor: pointer
  }
  svg{
    font-size: 3rem;
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
  @media screen and (max-width: 503px) {
    .hamburger-menu{
      display: block
      }
      nav{
        padding: 0;
        border: none;
        display: flex;
      }
      ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    li{
      display: none
    }
    li.cart{
      padding: 0.5rem 0 0;
      
      display: block
    }
    li.user{
      display: block;
      font-size: 1.3rem;
      color: black;
      margin: 0;
      padding: 0.5rem 0 0;
    }
    .no-in-cart {
      bottom: 2.7rem;
    }
    /* li {
      padding: 0.3rem;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    nav {
      justify-content: space-between;
    }
  } */
`;

export default Navbar;
