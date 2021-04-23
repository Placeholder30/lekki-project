import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductsContext } from "../context/Context";
function FeaturedProducts() {
  const productsData = useContext(ProductsContext);
  return (
    <ProductContainer>
      <h2>
        <span>Featured </span>
      </h2>
      <div className="cards">
        {productsData
          .filter((product) => product.id < 4)
          .map((product, index) => (
            <CardContainer key={index}>
              <div className="prod-image">
                <img src={product.imageUrl} alt="watch" />
              </div>
              <p className="prod-name">{product.name}</p>
              <p className="price">${product.price}</p>
              <div className="view-prod" onClick={() => {}}>
                <Link to={`/products/${product.UUID}`}>View Item </Link>
                {">"}
              </div>
            </CardContainer>
          ))}
      </div>
    </ProductContainer>
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
      background-color: #000;
      color: white;
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
