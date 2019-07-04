import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

const Li = styled.li`
  padding: 5px;
  width: 60px;
  height: 50px;
  margin: 5px;
  line-height: 50px;
  text-align: center;
`;

export const Sales = () => {
  return (
    <Container>
      <ul>
        <Li>รับซื้อ</Li>
        <Li>ขายออก</Li>
      </ul>
    </Container>
  );
};
