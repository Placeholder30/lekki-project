import { useContext } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { ProductsContext } from "../context/Context";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Card from "./Card";
function Products({ userData, setUserData }) {
  const location = useLocation();
  const productsData = useContext(ProductsContext);
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <ProductsMain>
        <div className="products">
          {location.pathname === "/all"
            ? productsData.map((product) => (
                <Card key={product.id} product={product} />
              ))
            : location.pathname === "/men"
            ? productsData
                .filter((product) => product.category === "men")
                .map((product) => <Card key={product.id} product={product} />)
            : productsData
                .filter((product) => product.category === "women")
                .map((product) => <Card key={product.id} product={product} />)}
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
