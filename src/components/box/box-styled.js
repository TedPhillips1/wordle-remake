import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 55px;
  height: 55px;
  border: 2px solid #c6c395;
  ${(props) => props.distance === 0 && "background-color:#44633f;"};
  ${(props) => props.distance >= 1 && "background-color:#928d4f;"};
`;
