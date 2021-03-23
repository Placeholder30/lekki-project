import React from "react";
import styled from "styled-components";
function FeaturedProducts() {
  return (
    <Container>
      <h2>
        <span>Featured Products</span>
      </h2>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  h2 {
    text-align: center;
  }
`;

export default FeaturedProducts;
