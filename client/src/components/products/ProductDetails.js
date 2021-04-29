import React, { useState, useContext } from "react";
import Navbar from "../home/Navbar";
import styled from "styled-components";
import Footer from "../home/Footer";
import FeaturedProducts from "../home/FeaturedProducts";
import { CartContext, ProductsContext } from "../context/Context";
import { useParams } from "react-router";
function ProductDetails({ userData }) {
  const [productNo, setProductNo] = useState(1);
  const [cart, setCart] = useContext(CartContext);
  const productsData = useContext(ProductsContext);
  const { id } = useParams();
  const [product] = productsData.filter((item) => {
    if (item.UUID === id) {
      return item;
    }
  });

  const addToCart = () => {
    let addToCart = true;
    cart.map((cartItem) => {
      if (cartItem.name === product.name) {
        addToCart = false;
      }
    });
    addToCart &&
      setCart((state) => [...state, { ...product, quantity: productNo }]);
  };

  return (
    <>
      <Navbar userData={userData} />
      <ProductContainer>
        {!product ? (
          <div>Loading....</div>
        ) : (
          <>
            <div className="product">
              <img src={product.imageUrl} alt={product.alt} />
            </div>
            <div className="content">
              <h2>{product.name}</h2>
              <div className="price">${product.price}</div>
              <div className="story">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae odit placeat fuga.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero voluptatibus expedita omnis molestias magnam molestiae
                  quia blanditiis, illum incidunt impedit.
                </p>
                <div className="buttons">
                  <button
                    onClick={() => productNo && setProductNo(productNo - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={productNo}
                    onChange={(e) => {
                      setProductNo(Number(e.target.value));
                    }}
                  />
                  <button onClick={() => setProductNo(productNo + 1)}>+</button>
                  <button
                    className="add-cart"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </ProductContainer>
      <FeaturedProducts />
      <Footer />
    </>
  );
}

const ProductContainer = styled.main`
  margin-top: 2rem;
  display: flex;
  margin-bottom: 4rem;
  .content {
    max-width: 40vw;
  }
  .product {
    margin-right: 7rem;
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .price {
    font-size: 2rem;
    color: red;
    font-weight: 500;
  }
  .buttons button {
    font-size: 1.4rem;
    width: 4rem;
    min-height: 4rem;
    text-align: center;
    background-color: black;
    color: white;
    border: none;
  }
  .buttons input {
    margin: 0 0.3rem;
    width: 4rem;
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
    margin: 2rem 0;
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
    .cards {
      justify-content: center;
    }
    .content {
      max-width: 60vw;
    }
  }
`;
export default ProductDetails;
