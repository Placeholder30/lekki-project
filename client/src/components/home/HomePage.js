import Collection from "./Collection";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Grids from "./Grid";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Collection photo={"firstPhoto"} data={femaleData} />
      <Grids />
      <Collection data={maleData} />
      <FeaturedProducts />
      <Footer />
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
