import React from "react";
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Footer from "../components/home/Footer";
import Grids from "../components/home/Grid";
import Navbar from "../components/home/Navbar";

function HomePage({ userData, setUserData }) {
  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <Collection photo={"firstPhoto"} />
      <Grids />
      <Collection />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage;
