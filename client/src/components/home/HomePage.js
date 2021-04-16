import React from "react";
import Collection from "./Collection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Grids from "./Grid";
import Navbar from "./Navbar";

function HomePage({ userData, setUserData, setProduct }) {
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <Collection photo={"firstPhoto"} />
      <Grids />
      <Collection />
      <FeaturedProducts setProduct={setProduct} />
      <Footer />
    </>
  );
}

export default HomePage;
