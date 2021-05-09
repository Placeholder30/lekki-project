import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/Context";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import spinner from "../assets/Spinner.svg";
import MobileNav from "../home/MobileNav";
import { SideBarContext } from "../context/Context";
function Order() {
  const [userData] = useContext(UserContext);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useContext(SideBarContext);

  // eslint-disable-next-line no-undef
  const { REACT_APP_BACKEND } = process.env;
  useEffect(() => {
    const fetchOrders = async () => {
      const result = await fetch(
        `${REACT_APP_BACKEND}/order/${userData.UUID}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${userData.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (result.status === 200) {
        const orders = await result.json();
        setOrders(orders);
        setLoading(false);
      }
    };
    userData.authenticated && fetchOrders();
  }, []);
  return (
    <>
      {showSideBar && <MobileNav setShowSideBar={setShowSideBar} />}
      <Navbar setShowSideBar={setShowSideBar} />
      <Container>
        <Main>
          <h2>Orders</h2>
          {loading && userData.authenticated ? (
            <div className="loading-icon">
              <img src={spinner} alt="" />
            </div>
          ) : orders && orders.message ? (
            orders.message.map((item, index) => (
              <Card key={index}>
                <div className="image">
                  <img src={item.imageUrl} alt={item.alt} />
                </div>
                <div className="details">
                  <h4>{item.name}</h4>
                  <div> Order id: {item.orderId.split("-")[0]}</div>
                  <div> Order date: {item.orderDate.split("T")[0]}</div>
                  <div>items: {item.orderQuantity}</div>
                  <div className="price">price: {item.price}</div>
                </div>
              </Card>
            ))
          ) : (
            <h3>You have no orders, yet...</h3>
          )}
        </Main>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  max-width: 85%;
  display: flex;
  justify-content: space-between;
  min-height: 50vh;
`;
const Sidebar = styled.ul`
  flex: 1;
`;
const Main = styled.main`
  width: 50vw;
  margin: 0 auto;

  .loading-icon {
    margin: 0 auto;
    width: 10rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.4rem;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
const Card = styled.div`
  width: 100%;
  /* height: 12rem; */
  padding: 1rem;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 2px;
  margin-bottom: 1rem;
  .image {
    border: none;
    margin-right: 2rem;
    img {
      height: 100%;
      width: 100px;
    }
  }
  .details div,
  h4 {
    font-size: 1.4rem;
  }
`;

export default Order;
