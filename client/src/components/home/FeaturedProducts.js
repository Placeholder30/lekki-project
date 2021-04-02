import React from "react";
import styled from "styled-components";
import prod1 from "../assets/products/1.jpg";
import prod2 from "../assets/products/2.jpg";
import prod3 from "../assets/products/3.jpg";
function FeaturedProducts() {
  return (
    <ProductContainer>
      <h2>
        <span>Featured </span>
      </h2>
      <div className="cards">
        <ProductCard id={1} />
        <ProductCard id={2} />
        <ProductCard id={3} />
      </div>
    </ProductContainer>
  );
}
export function ProductCard({ id }) {
  return (
    <CardContainer>
      <div className="prod-image">
        <img src={id === 1 ? prod1 : id === 2 ? prod2 : prod3} alt="watch" />
      </div>
      <p className="prod-name">Desi Avramovitz</p>
      <p className="price">$50.88</p>
      <div className="view-prod">View Item {">"} </div>
    </CardContainer>
  );
}
const ProductContainer = styled.section`
  width: 100%;

  h2 {
    display: flex;
    width: 100%;
    text-transform: uppercase;
    font-size: 2rem;
    align-items: center;
  }
  h2::before,
  h2::after {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ea5f5f;
  }
  span {
    font-size: 2rem;
    margin: 0 3rem;
    color: #ea5f5f;
  }
  .cards {
    display: flex;
    justify-content: space-around;
  }
  .view-prod:hover {
    background-color: #383131;
    color: white;
  }
  @media screen and (max-width: 769px) {
    .cards {
      flex-direction: column;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2rem;
  margin-top: 2rem;
  /* margin-left: 2rem; */
  font-size: 1.4rem;
  padding: 1rem;

  .price {
    font-size: inherit;
    color: red;
    font-weight: 500;
  }
  .prod-name {
    font-size: inherit;
  }
  .view-prod {
    font-size: inherit;
    border: 1px solid #ccc;
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
  p {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 769px) {
    margin-top: 2rem;
  }
`;

export default FeaturedProducts;
