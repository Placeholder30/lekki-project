import React from "react";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Grids from "../components/home/Grid";
import Navbar from "../components/home/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Collection photo={"firstPhoto"} />
      <Grids />
      <Collection />
      <FeaturedProducts />
    </>
  );
}

export default Home;
