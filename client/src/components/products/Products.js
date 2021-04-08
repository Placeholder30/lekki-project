import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardContainer } from "../home/FeaturedProducts";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";

function Card({ product, setProduct }) {
  return (
    <CardContainer>
      <div className="prod-image">
        <img src={product.imageUrl} alt="" />
      </div>
      <p className="prod-name">{product.name}</p>
      <p className="price">${product.price}</p>
      <Link
        to="/details"
        className="view-prod"
        onClick={() => {
          setProduct(product);
        }}
      >
        View Item {">"}
      </Link>
    </CardContainer>
  );
}
function Products({ userData, setUserData, productsData, setProduct }) {
  const location = useLocation();
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <ProductsMain>
        <div className="products">
          {location.pathname === "/all"
            ? productsData.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  setProduct={setProduct}
                />
              ))
            : location.pathname === "/men"
            ? productsData
                .filter((product) => product.category === "men")
                .map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    setProduct={setProduct}
                  />
                ))
            : productsData
                .filter((product) => product.category === "women")
                .map((product) => (
                  <Card
                    key={product.id}
                    product={product}
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
