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
  // postData.headers.Authorization = `${userData.token}`;
  useEffect(() => {
    (async () => {
      try {
        const apiCall = await fetch("/products/all");
        if (apiCall.status === 200) {
          const result = await apiCall.json();
          setProductsData(result);
        }
      } catch (error) {
        console.log(error);
      }
    })();
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
            <Route exact path="/products/all">
              <Products productsData={productsData} userData={userData} />
            </Route>
            <Route exact path="/products/men">
              <Products productsData={productsData} userData={userData} />
            </Route>
            <Route exact path="/products/women">
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
