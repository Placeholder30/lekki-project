import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Payment from "./Payment";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";
import CartItem from "./CartItem";
function CartTable() {
  const [cart] = useContext(CartContext);
  const [orderMessage, setOrderMessage] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOrderMessage(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [orderMessage]);

  return (
    <TableContainer>
      {orderMessage && <h3>You've successfully placed your order</h3>}
      <h2>Your Cart</h2>
      {cart && cart.length ? (
        <>
          <table>
            <CartItem />
          </table>
          <Payment setOrderMessage={setOrderMessage} />
        </>
      ) : (
        <>
          <span className="is-empty">Is empty</span>
          <button className="back-home">
            <Link to="/">Back Home</Link>
          </button>
        </>
      )}
    </TableContainer>
  );
}

const TableContainer = styled.section`
  width: 100%;
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem 0;
    padding-top: 1.3rem;
  }
  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem auto;
    padding: 1rem;
    background-color: #d96528;
    width: 40vw;
    color: white;
  }
  table {
    width: 100%;
  }
  th {
    font-size: 1.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
    font-weight: 500;
  }
  td {
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  td.delete div {
    background-color: #d96528;
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }

  .flex {
    padding: 0.6rem;
    display: flex;
    align-items: center;
    h4 {
      font-size: 1.4rem;
    }
    img {
      margin-right: 1rem;
      max-width: 6rem;
    }
  }
  .minus {
    margin-right: 1rem;
  }
  .plus {
    margin-left: 1rem;
  }
  .minus,
  .plus {
    font-size: 1.4rem;
    width: 3rem;
    display: inline-block;
    &:hover {
      background-color: black;
      cursor: pointer;
      color: white;
    }
  }
  span.is-empty {
    display: block;
    margin: 0 auto;
    width: 12rem;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: 300;
  }
  button.back-home {
    display: block;
    margin: 0 auto;
    width: 12rem;
    height: 3rem;
    background-color: black;
    color: white;
    border: none;
    &:hover {
      background-color: #d96528;
      cursor: pointer;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    .flex {
      display: block;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;
export default CartTable;
