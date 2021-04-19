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
import { CartContext } from "./components/context/Context";
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
          <CartContext.Provider value={[cart, setCart]}>
            <ProductsContext.Provider value={productsData}>
              <Switch>
                <Route exact path="/">
                  <HomePage userData={userData} setUserData={setUserData} />
                </Route>
                <Route path="/login">
                  <LoginPage userData={userData} setUserData={setUserData} />
                </Route>
                <Route path="/register">
                  <RegisterPage userData={userData} setUserData={setUserData} />
                </Route>
                <Route path="/all">
                  <Products productsData={productsData} userData={userData} />
                </Route>
                <Route path="/men">
                  <Products productsData={productsData} userData={userData} />
                </Route>
                <Route exact path="/women">
                  <Products productsData={productsData} userData={userData} />
                </Route>
                <Route path="/products/:id">
                  <ProductDetails userData={userData} />
                </Route>
                <Route path="/cart">
                  <CartPage userData={userData} />
                </Route>
                <Route path="*" component={NotFound} />
              </Switch>
            </ProductsContext.Provider>
          </CartContext.Provider>
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
