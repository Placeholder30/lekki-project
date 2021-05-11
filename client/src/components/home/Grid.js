import React from "react";
import styled from "styled-components";
import iconCal from "../assets/icon-cal.svg";
import iconPackage from "../assets/icon-package.svg";
import iconService from "../assets/icon-service.svg";

function Grids() {
  return (
    <Container>
      <Grid className="first">
        <img src={iconCal} alt="calender" />
        <h5>24/7 Customer Service</h5>
        <p>Call us anytime</p>
      </Grid>

      <Grid className="mid">
        <img src={iconService} alt="laptop " />
        <h5> Easy online returns </h5>
        <p>Return Within 30 Days</p>
      </Grid>

      <Grid className="last">
        <img src={iconPackage} alt="delivery truck" />
        <h5>Free Shipping Globally</h5>
        <p>Same Day Delivery</p>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  gap: 12.5%;
  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;

const Grid = styled.div`
  border: 1px solid #ccc;
  padding: 2rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h5 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
  }
  p {
    font-size: 1.3rem;
    margin-top: 1.3rem;
  }
  img {
    width: 10rem;
  }
`;
export default Grids;
