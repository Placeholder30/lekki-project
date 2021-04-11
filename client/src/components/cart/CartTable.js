import { useState } from "react";
import styled from "styled-components";
function CartTable({ cart, setCart }) {
  const [quantity, setQuantity] = useState({});

  const toggleItemQuantity = (itemName, subtract) => {
    if (quantity[itemName]) {
      const newState = {};
      if (subtract) {
        newState[itemName] = quantity[itemName] - 1;
        setQuantity((state) => ({ ...state, ...newState }));
      } else {
        newState[itemName] = quantity[itemName] + 1;
        setQuantity((state) => ({ ...state, ...newState }));
      }
    } else {
      const newState = {};
      newState[itemName] = 1;
      setQuantity((state) => ({ ...state, ...newState }));
    }
  };
  const handleDelete = (name) => {
    const filteredCart = cart.filter((item) => item.name != name);
    setCart(filteredCart);
    const newQuantity = quantity;
    delete newQuantity[name];
    setQuantity(newQuantity);
  };
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
          {cart.map((item, index) => (
            <tr key={index}>
              <td className="flex">
                <img src={item.imageUrl} alt="" />
                <h4>{item.name}</h4>
              </td>
              <td>{item.price}</td>
              <td>
                <span
                  onClick={() => toggleItemQuantity(item.name, "subtract")}
                  className="minus"
                >
                  -
                </span>
                <span className="qty">{quantity[item.name] || 1}</span>
                <span
                  className="plus"
                  onClick={() => toggleItemQuantity(item.name)}
                >
                  +
                </span>
              </td>
              <td>
                {(quantity[item.name] * item.price).toFixed(2) || item.price}
              </td>
              <td className="delete">
                <div
                  onClick={() => {
                    handleDelete(item.name);
                  }}
                >
                  X
                </div>
              </td>
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
  td.delete div {
    background-color: red;
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
`;
export default CartTable;
