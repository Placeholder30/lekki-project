import Footer from "../home/Footer";
import Grids from "../home/Grid";
import Navbar from "../home/Navbar";
import CartLogos from "./CartLogos";
import CartTable from "./CartTable";

function CartPage({ userData }) {
  return (
    <>
      <Navbar userData={userData} />
      <CartLogos />
      <CartTable />
      <Grids />
      <Footer />
    </>
  );
}

export default CartPage;
