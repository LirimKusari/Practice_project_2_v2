import React from "react";
import styled from "styled-components";
import CartButton from "../UI/CartButton";

const MainHeaderWrapper = styled.div`
  width: 100%;

  background: #7f2607;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainHeader = (props) => {
  return (
    <MainHeaderWrapper className="header">
      <h1>ReactMeals</h1>
      <CartButton />
    </MainHeaderWrapper>
  );
};

export default MainHeader;
