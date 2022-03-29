import { BigKey } from "./big-key-styled";

function BigKeyComponent({ onClick, text }) {
  return <BigKey onClick={onClick}>{text}</BigKey>;
}

export default BigKeyComponent;
