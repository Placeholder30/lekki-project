import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
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
    
  `;
const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;
