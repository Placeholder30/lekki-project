import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { requestOptions } from "../../helpers/fetch";
import { UserContext } from "../context/Context";
import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
function Order() {
  const [userData] = useContext(UserContext);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      const result = await fetch(`order/${userData.UUID}`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${userData.token}`,
          "Content-Type": "application/json",
        },
      });
      if (result.status === 200) {
        const orders = await result.json();
        setOrders(orders);
        console.log(result.status);
      }
    };
    userData && fetchOrders();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar>
          <Link>
            <li>Orders</li>
          </Link>
          <Link>
            <li>Account</li>
          </Link>
          <Link>
            <li>Orders</li>
          </Link>
        </Sidebar>
        <Main>
          <h2>Orders</h2>
          {orders && orders.message ? (
            orders.message.map((item, index) => (
              <Card key={index}>
                <div className="image">
                  <img src={item[0]?.Product.imageUrl} alt="" />
                </div>
                <div className="details">
                  <h4>{item[0]?.Product.name}</h4>
                  <div>order id</div>
                  <div className="price">
                    {item[0]?.orderDate.toLocaleString()}
                  </div>
                  <div>order date</div>
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
  width: 40vw;
  margin: 0 auto;
  flex: 3;
  h2 {
    font-size: 1.7rem;
  }
  h3 {
    font-size: 1.4rem;
    text-align: center;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 12rem;
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
