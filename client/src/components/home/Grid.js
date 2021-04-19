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

      <Grid className="mid">
        <img src={iconService} alt="laptop " />
        <h5> Easy online returns </h5>
        <p>Send Within 30 Days</p>
      </Grid>

      <Grid className="last">
        <img src={iconPackage} alt="delivery truck" />
        <h5>Free Shipping Globally</h5>
        <p>Delivery in 4 Days</p>
      </Grid>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-around;
  margin: 3rem auto;

  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
    .last,
    .mid {
      margin-top: 2rem;
    }
  }
`;

const Grid = styled.div`
  flex: 1;
  border: 1px solid #ccc;
  padding: 2rem 4rem;
  margin-right: 2rem;
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
