import { useState } from "react";
import styled from "styled-components";

function Payment({ cart }) {
  return (
    <PaymentContainer>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="example@youremail.com"
        />
        <p>
          This is a functional payment gateway, you can send me money if
          you&apos;re feeling my concept. However, you won&apos;t be getting
          anything in return. You will be donating to open source. Hopefully,
          this holds up in court.
        </p>
        <label htmlFor="card">Credit Card</label>
        <input type="text" name="" id="card" />
        <button type="submit">Pay with credit card</button>
      </form>
      <div className="total-container">
        <div className="subtotal flexx">
          <div>Subtotal</div>
          <div>$34.55</div>
        </div>
        <div className="shipping flexx">
          <div>Shipping</div>
          <div>Free Shipping</div>
        </div>
        <div className="total flexx">
          <div>Total</div>
          <div>$32.55</div>
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

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export default Payment;
