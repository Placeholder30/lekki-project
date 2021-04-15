import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Card from "./Card";
function Products({ userData, setUserData, productsData, setProduct, cart }) {
  const location = useLocation();
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} cart={cart} />
      <ProductsMain>
        <div className="products">
          {location.pathname === "/all"
            ? productsData.map((product) => (
                <Card
                  key={product.id}
                  product={product} //local mapped product variable that you shoud rename but will you?
                  setProduct={setProduct} //App.js hook
                />
              ))
            : location.pathname === "/men"
            ? productsData
                .filter((product) => product.category === "men")
                .map((product) => (
                  <Card
                    key={product.id}
                    product={product} //local product variable
                    setProduct={setProduct}
                  />
                ))
            : productsData
                .filter((product) => product.category === "women")
                .map((product) => (
                  <Card
                    key={product.id}
                    product={product} //local product variable
                    setProduct={setProduct}
                  />
                ))}
        </div>
        <div className="sale">
          <h2>Special Sale</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
          laboriosam cumque blanditiis quia quis doloremque voluptas pariatur
          omnis reiciendis quod!
        </div>
      </ProductsMain>
      <Footer />
    </>
  );
}

const ProductsMain = styled.section`
  display: flex;
  justify-content: space-between;
  .products {
    flex: 2.8;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .sale {
    flex: 1.2;
    h2 {
      margin-top: 1.8rem;
    }
  }
  .prod-image {
    max-width: 250px;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 950px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 530px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
