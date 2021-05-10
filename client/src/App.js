import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import HomePage from "./components/home/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import LoginPage from "./components/forms/LoginPage";
import RegisterPage from "./components/forms/RegisterPage";
import Products from "./components/products/Products";
import NotFound from "./components/notfound/NotFound";
import ProductDetails from "./components/products/ProductDetails";
import CartPage from "./components/cart/CartPage";
import {
  CartContext,
  LogoutContext,
  SideBarContext,
  UserContext,
} from "./components/context/Context";
import { ProductsContext } from "./components/context/Context";
import Order from "./components/order/Order";
import Scroll from "./components/home/Scroll";
import useLocalStorage from "./helpers/useLocalStorage";
import {
  getUserDataFromLocalStorage,
  getCartFromLocalStorage,
} from "./helpers/useLocalStorage";

function App() {
  const [userData, setUserData] = useState(getUserDataFromLocalStorage());
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [showSideBar, setShowSideBar] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-undef
  const { REACT_APP_BACKEND } = process.env;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetch(`${REACT_APP_BACKEND}/products`);
        if (products.status === 200) {
          const result = await products.json();
          setProductsData(result);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchProducts();
  }, []);

  useLocalStorage(cart, "cart");
  useLocalStorage(userData, "userData");
  const handleLogout = async () => {
    const logout = await fetch(`${REACT_APP_BACKEND}/logout`, {
      method: "post",
      Authorization: `Bearer ${userData.token}`,
    });
    if (logout.status === 200) {
      const result = await logout.json();
      // history.push("/");
      setUserData(result);
      setCart([]);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <UserContext.Provider value={[userData, setUserData]}>
            <CartContext.Provider value={[cart, setCart]}>
              <ProductsContext.Provider value={productsData}>
                <SideBarContext.Provider value={[showSideBar, setShowSideBar]}>
                  <LogoutContext.Provider value={handleLogout}>
                    <Scroll />
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/register" component={RegisterPage} />
                      <Route path="/all" component={Products} />
                      <Route path="/women" component={Products} />
                      <Route path="/men" component={Products} />
                      <Route path="/products/:id" component={ProductDetails} />
                      <Route path="/cart" component={CartPage} />
                      <Route path="/orders" component={Order} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </LogoutContext.Provider>
                </SideBarContext.Provider>
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
