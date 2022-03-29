import { Key } from "./key-styled";

function KeyComponent({ onClick, letter }) {
  return <Key onClick={onClick}>{letter}</Key>;
}

export default KeyComponent;
