import { useContext } from "react";
import styled from "styled-components";
import Payment from "../forms/Payment";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";
function CartTable() {
  const [cart, setCart] = useContext(CartContext);
  const toggleItemQuantity = (itemName, subtract) => {
    let newState;
    if (subtract) {
      newState = cart.map((item) => {
        item.name === itemName && item.quantity--;
        return item;
      });
    } else {
      newState = cart.map((item) => {
        item.name === itemName && item.quantity++;
        return item;
      });
    }
    setCart(newState);
  };
  const handleDelete = (name) => {
    const filteredCart = cart.filter((item) => item.name != name);
    setCart(filteredCart);
  };
  return (
    <TableContainer>
      <h2>Your Cart</h2>
      {cart.length ? (
        <>
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
                      onClick={() =>
                        item.quantity > 1 &&
                        toggleItemQuantity(item.name, "subtract", item.quantity)
                      }
                      className="minus"
                    >
                      -
                    </span>
                    <span className="qty">{item.quantity}</span>
                    <span
                      className="plus"
                      onClick={() => toggleItemQuantity(item.name)}
                    >
                      +
                    </span>
                  </td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
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
          <Payment />
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
`;
export default CartTable;
