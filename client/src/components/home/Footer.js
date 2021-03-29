import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Container>
      <ul className="more-info">
        <li>About</li>
        <li>Company</li>
        <li>Locations</li>
        <li>Contact</li>
        <li>Hours</li>
      </ul>
      <ul className="socials">
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Linkedin</li>
      </ul>
      <div className="news-letter">
        <label>
          Newsletter
          <input type="text" />
        </label>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.5rem;
    margin-left: 8rem;
  }
  .news-letter {
    width: 33.333%;
    align-self: end;
  }
  label {
    font-size: 1.5rem;
    margin-left: 8rem;
  }
  input {
    display: block;
    width: 65%;
    height: 2rem;
    margin-left: 8rem;
  }
  @media screen and (max-width: 650px) {
    li {
      margin-left: 4rem;
    }
    input,
    label {
      margin-left: 2rem;
    }
  }
`;
export default Footer;
