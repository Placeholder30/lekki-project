import Navbar from "./components/home/Navbar";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Collection from "./components/home/Collection";
import Grids from "./components/home/Grid";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Collection photo={"firstPhoto"} />
        <Grids />
        <Collection />
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');
    *, html {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 10px
    }
    body{
      border: 10px solid #ccc;
      min-height: 100vh;
      font-family: 'Poppins', sans-serif;

    }
    
  `;
