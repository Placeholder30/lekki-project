import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
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
          .filter(
            (product) => product.id > 2 && product.id < 7 && product.id != 4
          )
          .map((product, index) => (
            <Link to={`/products/${product.UUID}`} key={index}>
              <CardContainer>
                <div className="prod-image">
                  <img src={product.imageUrl} alt="watch" />
                </div>
                <p className="prod-name">{product.name}</p>
                <p className="price">${product.price}</p>
                <div className="view-prod">
                  <div>View Item</div>{" "}
                  <RiArrowRightSLine className="right-arrow" />
                </div>
              </CardContainer>
            </Link>
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
  .view-prod {
    display: flex;
    align-items: center;
    div {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  .view-prod:hover {
    background-color: #383131;
    color: white;
  }
  .right-arrow {
    font-size: 1.4rem;
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
  margin-top: 5rem;
  font-size: 1.4rem;
  padding: 2rem;
  max-width: 25rem;

  .price {
    font-size: inherit;
    color: red;
    font-weight: 500;
  }
  .prod-name {
    font-size: inherit;
  }
  .prod-image {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .view-prod {
    font-size: 1.4rem;
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
    margin: 2rem auto 0;
  }
`;

export default FeaturedProducts;
