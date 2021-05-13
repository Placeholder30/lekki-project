import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { ProductsContext, SideBarContext } from "../context/Context";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Card from "./Card";
import MobileNav from "../home/MobileNav";
import spinner from "../assets/Spinner.svg";

function Products({ userData, setUserData }) {
  const location = useLocation();
  const productsData = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState();
  const [price, setPrice] = useState(25);
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);
  const [loading, setLoading] = useState(true);
  const filterByPrice = (e) => {
    setPrice(e.target.value);
    const filtered = productsData.filter(
      (item) => item.price <= e.target.value
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    setFilteredProducts(productsData);
    setLoading(false);
  }, [productsData]);
  return (
    <>
      <Navbar
        userData={userData}
        setUserData={setUserData}
        setShowSideBar={setShowSideBar}
      />
      {showSideBar && <MobileNav setShowSideBar={setShowSideBar} />}
      {loading ? (
        <div className="loading-icon">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <ProductsMain>
          <div className="products">
            {location.pathname === "/all"
              ? filteredProducts?.map((product) => (
                  <Card key={product.id} product={product} />
                ))
              : location.pathname === "/men"
              ? filteredProducts
                  ?.filter((product) => product.category === "men")
                  .map((product) => <Card key={product.id} product={product} />)
              : filteredProducts
                  ?.filter((product) => product.category === "women")
                  .map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
          </div>
          <div className="sale">
            <h2>Special Sale</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              laboriosam cumque blanditiis quia quis doloremque voluptas
              pariatur omnis reiciendis quod!
            </p>
            <div className="filter-by-price">
              <label htmlFor="range">Filter by price:</label>
              <div className="max-price">Max price: ${price}</div>
            </div>
            <input
              type="range"
              value={price}
              id="range"
              max="25"
              onChange={filterByPrice}
            />
          </div>
        </ProductsMain>
      )}
      <Footer />
    </>
  );
}

const ProductsMain = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: 70vh;
  .products {
    flex: 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .sale {
    flex: 1.2;
    padding: 2rem;
    h2 {
      margin: 2.8rem 0;
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
      text-justify: auto;
    }
    input[type="range"] {
      font-size: 2rem;
      width: 100%;
    }
    label {
      display: block;
      margin-top: 2rem;
      font-size: 1.4rem;
      font-weight: 400;
    }
    .max-price {
      font-size: 1.4rem;
      font-weight: 400;
      margin: 1rem 0;
    }
  }
  .prod-image {
    max-width: 250px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .view-prod {
    display: flex;
    align-items: center;
    div {
      font-size: 1.4rem;
      font-weight: 500;
    }
    .loading-icon {
      margin: 0 auto;
      width: 10rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 550px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
