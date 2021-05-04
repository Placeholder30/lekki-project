import React from "react";
import styled from "styled-components";
import shoe from "../assets/shoe1.jpg";
import bag from "../assets/bag.jpg";
function Collection({ photo }) {
  return (
    <Container>
      <div className="text"></div>
      <div className="pic">
        <img
          src={photo ? shoe : bag}
          alt={photo ? "a large shoe" : "a large bag shoe and some"}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .pic {
    width: 70rem;
    margin-bottom: 2rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Collection;
