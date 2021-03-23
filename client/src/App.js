import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
    *, html {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 10px;
      font-weight: 300;
    }
    body{
      border: 10px solid #ccc;
      min-height: 100vh;
      font-family: 'Poppins', sans-serif;

    }
    
  `;
