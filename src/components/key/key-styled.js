import styled from "styled-components";

export const Key = styled.button`
  background-color: #c6c395;
  ${(props) => props.keyboard >= 1 && "background-color:#928d4f; color: white;"}
  ${(props) =>
    props.keyboard === 0 && "background-color:#44633f;  color: white;"};
  ${(props) => props.keyboard === false && "opacity: 0.25;"};
  ${(props) =>
    props.keyboard === true && "background-color:#c6c395; color: black;"};
  border: none;
  border-radius: 10%;
  height: 45px;
  width: 30px;
  font-size: 25px;

  &&:active {
    opacity: 0.4;
    transform: translateY(1.5px);
  }
`;
