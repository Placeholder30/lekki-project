import React from "react";
import styled from "styled-components";
import bag from "../assets/package.png";
import sandals from "../assets/timbs.png";
function Collection({ photo, data }) {
  return (
    <Container>
      <div className="text">
        <WomenFashion>{data.fashion}</WomenFashion>
        <FourtyPercent>{data.off}</FourtyPercent>
        <HotSummer>{data.season}</HotSummer>
      </div>
      <div className="pic">
        <img
          src={photo ? bag : sandals}
          alt={photo ? "a black bag" : "a green shoe"}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 2.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .text {
    flex: 1;
  }
  .pic {
    flex: 2;
    margin-bottom: 2rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const WomenFashion = styled.div`
  font-size: 3rem;
  color: #d96528;
  letter-spacing: 0.7rem;
`;
const FourtyPercent = styled.div`
  font-size: 3rem;
  letter-spacing: 0.7rem;
`;
const HotSummer = styled.div`
  font-size: 3rem;
  color: #d96528;
  letter-spacing: 0.7rem;
`;

export default Collection;
