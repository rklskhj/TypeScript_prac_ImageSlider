import React from "react";
import styled from "styled-components";

const Header = (): JSX.Element => {
  return (
    <Container>
      <div>로고</div>
      <div>카테고리 자리</div>
      <div>검색창</div>
      <div>내정보</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 1560px;
  height: 66px;
  /* background-color: #802323; */
  padding: 0px 20px;
  div {
    width: 120px;
    background-color: white;
  }
`;
