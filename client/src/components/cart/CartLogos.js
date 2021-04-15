import styled from "styled-components";
function CartLogos({ cart }) {
  return (
    <CartMain>
      <div className="shopping-cart square">
        <div className="circle">
          <p>01</p>
        </div>
        <h3>Shopping Cart</h3>
      </div>
      <div className="checkout square">
        <div className="circle">
          <p>02</p>
        </div>
        <h3>Check Out</h3>
      </div>
      <div className="order-complete square">
        <div className="circle">
          <p>03</p>
        </div>
        <h3>Order Complete</h3>
      </div>
    </CartMain>
  );
}

const CartMain = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  .square {
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.5rem;
    }
  }
  .circle {
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    border: 1px solid #ccc;
    background-color: white;
    margin: 2rem auto;
    text-align: center;
    p {
      font-size: 1.7rem;
      margin: 4rem auto;
    }
  }
`;

export default CartLogos;
