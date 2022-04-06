import { Key } from "./key-styled";

function KeyComponent({ onClick, letter, keyboard }) {
  return (
    <Key
      keyboard={keyboard}
      onClick={onClick}
      disabled={keyboard ? false : typeof keyboard === "boolean" ? true : false}
    >
      {letter}
    </Key>
  );
}

export default KeyComponent;
