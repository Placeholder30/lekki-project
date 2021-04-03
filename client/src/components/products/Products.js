import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { CardContainer } from "../home/FeaturedProducts";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

function Products({ userData, setUserData, productsData }) {
  const location = useLocation();
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <ProductsMain>
        <div className="products">
          {location.pathname === "/products/all"
            ? productsData.map((prod) => (
                <CardContainer key={prod.id}>
                  <div className="prod-image">
                    <img src={prod.imageUrl} alt="" />
                  </div>
                  <p className="prod-name">{prod.name}</p>
                  <p className="price">${prod.price}</p>
                  <div className="view-prod">View Item {">"} </div>
                </CardContainer>
              ))
            : location.pathname === "/products/men"
            ? productsData
                .filter((prod) => prod.category === "men")
                .map((prod) => (
                  <CardContainer key={prod.id}>
                    <div className="prod-image">
                      <img src={prod.imageUrl} alt="" />
                    </div>
                    <p className="prod-name">{prod.name}</p>
                    <p className="price">${prod.price}</p>
                    <div className="view-prod">View Item {">"} </div>
                  </CardContainer>
                ))
            : location.pathname === "/products/women"
            ? productsData
                .filter((prod) => prod.category === "women")
                .map((prod) => (
                  <CardContainer key={prod.id}>
                    <div className="prod-image">
                      <img src={prod.imageUrl} alt="" />
                    </div>
                    <p className="prod-name">{prod.name}</p>
                    <p className="price">${prod.price}</p>
                    <div className="view-prod">View Item {">"} </div>
                  </CardContainer>
                ))
            : null}
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .sale {
    max-width: 35rem;
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
`;

export default Products;
