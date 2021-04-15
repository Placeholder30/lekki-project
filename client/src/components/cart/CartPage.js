import Footer from "../home/Footer";
import Grids from "../home/Grid";
import Navbar from "../home/Navbar";
import CartLogos from "./CartLogos";
import CartTable from "./CartTable";

function CartPage({ userData, cart, setCart }) {
  return (
    <>
      <Navbar userData={userData} cart={cart} />
      <CartLogos cart={cart} />
      <CartTable cart={cart} setCart={setCart} />
      <Grids />
      <Footer />
    </>
  );
}

export default CartPage;
