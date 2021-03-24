import React from "react";
import styled from "styled-components";
import iconCal from "../assets/icon-cal.svg";
import iconPackage from "../assets/icon-package.svg";
import iconService from "../assets/icon-service.svg";

function Grids() {
  return (
    <Container>
      <Grid>
        <img src={iconCal} alt="calender" />
        <h5>24/7 Customer Service</h5>
        <p>Call us anytime</p>
      </Grid>

      <Grid>
        <img src={iconService} alt="laptop " />
        <h5> Easy online returns </h5>
        <p>Send Within 30 Days</p>
      </Grid>

      <Grid>
        <img src={iconPackage} alt="delivery truck" />
        <h5>Free Shipping Globally</h5>
        <p>Delivery in 4 Days</p>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

const Grid = styled.div`
  border: 1px solid #ccc;
  padding: 2rem 4rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h5 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  p {
    font-size: 1.3rem;
    margin-top: 1.3rem;
  }
  img {
    width: 13rem;
  }
`;
export default Grids;
