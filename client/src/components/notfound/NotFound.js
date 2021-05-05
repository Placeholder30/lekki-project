import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../forms/Login";
function NotFound() {
  return (
    <>
      <Link to="/">
        <Logo>Lekki Store</Logo>
      </Link>
      <Container>
        <h1>Error 404: Page not found</h1>
        <ImageContaianer>
          <img
            src="https://res.cloudinary.com/placeholder30/image/upload/v1617470868/lekki-store/frontend-assets/onfire.jpg"
            alt=""
          />
        </ImageContaianer>
      </Container>
    </>
  );
}

const Container = styled.div`
  h1 {
    display: grid;
    place-items: center;
    margin-top: 3rem;
    font-size: 4rem;
  }
`;
const ImageContaianer = styled.div`
  margin: 0 auto;
  width: 60vw;
  img {
    width: 100%;
  }
  Logo {
    margin-bottom: 0;
  }
`;

export default NotFound;
