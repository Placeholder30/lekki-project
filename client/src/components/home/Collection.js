import React from "react";
import styled from "styled-components";
import shoe from "../assets/shoe1.jpg";
import bag from "../assets/bag.jpg";

function Collection({ photo }) {
  return (
    <Container>
      <img src={photo ? shoe : bag} alt="shoe" />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default Collection;
