import { useContext, useState } from "react";
import styled from "styled-components";
import { requestOptions } from "../../helpers/fetch";
import { CartContext, UserContext } from "../context/Context";
function Payment({ setOrderMessage }) {
  const [cart, setCart] = useContext(CartContext);
  const [userData] = useContext(UserContext);
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-undef
  const { REACT_APP_BACKEND } = process.env;
  const handleOrder = async (e) => {
    e.preventDefault();
    if (!userData.authenticated) {
      setError(true);
      return;
    }
    const placeOrder = await fetch(`${REACT_APP_BACKEND}/order`, {
      ...requestOptions,
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userData.UUID, cart: cart }),
    });
    if (placeOrder.status === 201) {
      setOrderMessage(true);
      setCart([]);
    }
  };
  const total = cart
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    })
    .toFixed(2);
  //hack for when user saves item to cart before login, userId has to be updated before sending to server to avoid sending undefined.
  cart.forEach((item) => {
    item.userId = userData.UUID;
  });
  return (
    <PaymentContainer>
      <form onSubmit={handleOrder}>
        <label htmlFor="address">Address</label>
        <input
          type="address"
          name=""
          id="address"
          placeholder="1/3 pound road Aba"
        />
        <p>
          This is a functional payment gateway, you can send me money if
          you&apos;re feeling my concept. However, you
          <strong> WILL NOT </strong> be getting anything in return. You will be
          donating to open source. Hopefully, this holds up in court.
        </p>
        <label htmlFor="card">Credit Card</label>
        <input type="text" name="" id="card" />
        {error && <div className="error"> Please login to place an order</div>}
        <button type="submit">Pay with credit card</button>
      </form>
      <div className="total-container">
        <div className="subtotal flexx">
          <div className="bold">Subtotal</div>
          <div className="bold">${total}</div>
        </div>
        <div className="shipping flexx">
          <div>Shipping</div>
          <div>Free Shipping</div>
        </div>
        <div className="total flexx">
          <div className="bold">Total</div>
          <div className="bold">${total}</div>
        </div>
      </div>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12rem;
  margin-top: 2rem;
  * {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  div.error {
    color: red;
    text-align: center;
    margin: 0;
  }
  .total-container {
    padding-right: 10rem;
  }

  input,
  button {
    width: 100%;
    height: 2.3rem;
  }
  input:focus {
    outline: none;
  }
  strong {
    font-weight: 500;
  }
  button {
    margin-top: 1.3rem;
    background-color: #d96528;
    color: white;
    border: none;
    /* text-decoration: none; */
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }

  .flexx {
    display: flex;
    justify-content: space-between;
  }
  .bold {
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    .total-container {
      padding-right: 0;
    }
  }
`;

export default Payment;
