import Collection from "./Collection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Grids from "./Grid";
import Navbar from "./Navbar";
import { useContext } from "react";
import MobileNav from "../home/MobileNav";
import styled from "styled-components";
import { SideBarContext } from "../context/Context";
import spinner from "../assets/Spinner.svg";
function HomePage({ loading }) {
  const [showSideBar] = useContext(SideBarContext);

  return (
    <>
      {loading ? (
        <div className="loading-icon">
          <img src={spinner} alt="" />
        </div>
      ) : (
        <Home>
          {showSideBar && <MobileNav />}
          <Navbar />
          <Collection photo={"firstPhoto"} data={femaleData} />
          <Grids />
          <Collection data={maleData} />
          <FeaturedProducts />
          <Footer />
        </Home>
      )}
    </>
  );
}
const femaleData = {
  fashion: "WOMEN'S FASHION",
  off: "40% OFF",
  season: "HOT GIRL SUMMER",
};
const maleData = {
  fashion: "MEN'S FASHION ",
  off: "35% OFF",
  season: " STREET STYLE",
};
export default HomePage;
const Home = styled.div`
  position: relative;
`;
