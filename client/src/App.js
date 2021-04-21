import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HomePage from "./components/home/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/forms/LoginPage";
import RegisterPage from "./components/forms/RegisterPage";
import Products from "./components/products/Products";
import NotFound from "./components/notfound/NotFound";
import ProductDetails from "./components/products/ProductDetails";
import CartPage from "./components/cart/CartPage";
import { CartContext, UserContext } from "./components/context/Context";
import { ProductsContext } from "./components/context/Context";
function App() {
  const [userData, setUserData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetch("/products");
        if (products.status === 200) {
          const result = await products.json();
          setProductsData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const saveCartToLocalStorage = () => {
      const items = JSON.stringify(cart);
      localStorage.setItem("cart", items);
    };
    saveCartToLocalStorage();
  }, [cart]);

  function getCartFromLocalStorage() {
    const items = JSON.parse(localStorage.getItem("cart"));
    return !items ? [] : items;
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <UserContext.Provider value={[userData, setUserData]}>
            <CartContext.Provider value={[cart, setCart]}>
              <ProductsContext.Provider value={productsData}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/register" component={RegisterPage} />
                  <Route path="/all" component={Products} />
                  <Route path="/women" component={Products} />
                  <Route path="/men" component={Products} />
                  <Route path="/products/:id" component={ProductDetails} />
                  <Route path="/cart" component={CartPage} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </ProductsContext.Provider>
            </CartContext.Provider>
          </UserContext.Provider>
        </Router>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    *, html {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 10px;
      font-weight: 300;
    }
    body{
     font-family: 'Poppins', sans-serif;
     border: 0.8rem solid #ccc;
     min-height:100vh
    }
    a{
      text-decoration: none;
      color: inherit
    }
    
  `;
const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export default App;
