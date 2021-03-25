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
     border: 1rem solid #ccc;
     min-height:100vh
    }
    
  `;
const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;
