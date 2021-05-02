import { useContext } from "react";
import styled from "styled-components";
import { requestOptions } from "../../helpers/fetch";
import { CartContext, UserContext } from "../context/Context";
function Payment() {
  const [cart] = useContext(CartContext);
  const [userData] = useContext(UserContext);
  // eslint-disable-next-line no-undef
  const { REACT_APP_BACKEND } = process.env;
  const handleOrder = (e) => {
    e.preventDefault();
    const placeOrder = fetch(`${REACT_APP_BACKEND}/order`, {
      ...requestOptions,
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userData.UUID, cart: cart }),
    });
    if (placeOrder.status === 200) {
      console.log("order placed sucessfully");
    }
  };
  console.log(userData.token);

  const total = cart
    .map((item) => {
      return item.price * item.quantity;
    })
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    })
    .toFixed(2);

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
    background-color: #999;
    color: white;
    border: none;
    text-decoration: none;
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
