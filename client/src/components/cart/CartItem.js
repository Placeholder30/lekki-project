import { useContext } from "react";
import { CartContext } from "../context/Context";
function CartItem() {
  const [cart, setCart] = useContext(CartContext);
  const toggleItemQuantity = (itemName, action) => {
    let newState;
    if (action === "subtract") {
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

  const calcItemTotal = (qty, price) => (qty * price).toFixed(2);

  return (
    <>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ name, price, quantity, imageUrl }, index) => (
          <tr key={index}>
            <td className="flex">
              <img src={imageUrl} alt="" />
              <h4>{name}</h4>
            </td>
            <td>{price}</td>
            <td>
              <span
                onClick={() =>
                  quantity > 1 && toggleItemQuantity(name, "subtract")
                }
                className="minus"
              >
                -
              </span>
              <span className="qty">{quantity}</span>
              <span className="plus" onClick={() => toggleItemQuantity(name)}>
                +
              </span>
            </td>
            <td>{calcItemTotal(quantity, price)}</td>
            <td className="delete">
              <div
                onClick={() => {
                  handleDelete(name);
                }}
              >
                X
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default CartItem;
