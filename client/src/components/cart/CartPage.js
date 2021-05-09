import Footer from "../home/Footer";
import Grids from "../home/Grid";
import Navbar from "../home/Navbar";
import CartLogos from "./CartLogos";
import CartTable from "./CartTable";
import { useContext } from "react";
import { SideBarContext } from "../context/Context";
import MobileNav from "../home/MobileNav";
function CartPage() {
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);

  return (
    <>
      <Navbar setShowSideBar={setShowSideBar} />
      {showSideBar && <MobileNav setShowSideBar={setShowSideBar} />}
      <CartLogos />
      <CartTable />
      <Grids />
      <Footer />
    </>
  );
}

export default CartPage;
