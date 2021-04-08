import React, { useState } from "react";
import Navbar from "../home/Navbar";
import styled from "styled-components";
function ProductDetails({ userData, product }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar userData={userData} />
      <ProductContainer>
        <div className="product">
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="content">
          <h2>{product.name}</h2>
          <div className="price">${product.price}</div>
          <div className="story">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              odit placeat fuga.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              voluptatibus expedita omnis molestias magnam molestiae quia
              blanditiis, illum incidunt impedit.
            </p>
            <div className="buttons">
              <button onClick={() => count && setCount(count - 1)}>-</button>
              <input
                type="number"
                name=""
                value={count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
              <button onClick={() => setCount(count + 1)}>+</button>
              <button className="add-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.main`
  margin-top: 2rem;
  display: flex;
  .content {
    max-width: 60vw;
  }
  .product {
    margin-right: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .buttons button {
    font-size: 1.4rem;
    width: 5rem;
    min-height: 4rem;
    text-align: center;
    background-color: black;
    color: white;
    border: none;
  }
  .buttons input {
    margin: 0 0.3rem;
    width: 5rem;
    height: 4rem;
    text-align: center;
    outline: none;
    font-size: 1.4rem;
  }
  .buttons .add-cart {
    display: block;
    width: 10rem;
    background-color: #d96528;
    border: none;
    margin: 2rem 3rem 0;
  }
`;
export default ProductDetails;
