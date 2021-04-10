import Footer from "../home/Footer";
import Grids from "../home/Grid";
import Navbar from "../home/Navbar";
import CartLogos from "./CartLogos";
import CartTable from "./CartTable";

function CartPage({ userData, cart }) {
  return (
    <>
      <Navbar userData={userData} />
      <CartLogos />
      <CartTable cart={cart} />
      <Grids />
      <Footer />
    </>
  );
}

export default CartPage;
