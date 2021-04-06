import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Products from "./components/products/Products";
import NotFound from "./pages/NotFound";

function App() {
  const [userData, setUserData] = useState({});
  const [productsData, setProductsData] = useState([]);

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

  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage userData={userData} setUserData={setUserData} />
            </Route>
            <Route exact path="/login">
              <LoginPage userData={userData} setUserData={setUserData} />
            </Route>
            <Route exact path="/register">
              <RegisterPage userData={userData} setUserData={setUserData} />
            </Route>
            <Route exact path="/all">
              <Products productsData={productsData} userData={userData} />
            </Route>
            <Route exact path="/men">
              <Products productsData={productsData} userData={userData} />
            </Route>
            <Route exact path="/women">
              <Products productsData={productsData} userData={userData} />
            </Route>
            <Route component={NotFound} path="*" />
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default App;

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
