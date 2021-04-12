import { useState } from "react";
import styled from "styled-components";

function Payment() {
  return (
    <PaymentContainer>
      <input type="email" name="" id="" />
      <p>
        This is a functional payment gateway, you can send me money if
        you&apos;re feeling my concept. However, you won&apos;t be getting
        anything in return. You will be donating to open source. Hopefully, this
        holds up in court.
      </p>
      <input type="text" name="" id="" />
    </PaymentContainer>
  );
}

const PaymentContainer = styled.form``;

export default Payment;
