import { useState } from "react";
import styled from "styled-components";
function CartTable({ cart }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <TableContainer>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="flex">
                <img src={item.imageUrl} alt="" />
                <h4>{item.name}</h4>
              </td>
              <td>{item.price}</td>
              <td>
                <span
                  className="minus"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </span>
                <span className="qty">{quantity}</span>
                <span
                  className="plus"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </span>
              </td>
              <td>{quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

const TableContainer = styled.section`
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    margin: 1rem 0;
    padding-top: 1.3rem;
  }
  table {
    width: 100%;
  }
  th {
    font-size: 1.4rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
  }
  td {
    font-size: 1.3rem;
    text-align: center;
    border-bottom: 1px solid #ccc;
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
    }
  }
`;
export default CartTable;
