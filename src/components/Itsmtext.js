import React from "react";
import styled from "styled-components";

const Itsmtext = (props) => {
  return (
    <StyledDiv>
      Corpify Service Management is purpose-built for
      <br /> ITSM to help your team succeed
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 696px;
  margin: 0 auto;
  font-family: "Segoe UI", sans-serif;
  font-size: 35px;
  line-height: 48px;
  color: #253858;
  padding: 40px;
`;

export default Itsmtext;
