import React from "react";
import Collection from "./Collection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Grids from "./Grid";
import Navbar from "./Navbar";

function HomePage({ userData, setUserData, cart }) {
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} cart={cart} />
      <Collection photo={"firstPhoto"} />
      <Grids />
      <Collection />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage;
