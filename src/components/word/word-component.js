import BoxComponent from "../box/box-component";
import { Word } from "./word-styled";

function WordComponent({ word }) {
  return (
    <Word>
      <BoxComponent letter={word[0]} distance={word[0] ? "0" : ""} />
      <BoxComponent letter={word[1]} distance={word[1] ? "0" : ""} />
      <BoxComponent letter={word[2]} distance={word[2] ? "0" : ""} />
      <BoxComponent letter={word[3]} distance={word[3] ? "0" : ""} />
      <BoxComponent letter={word[4]} distance={word[4] ? "0" : ""} />
    </Word>
  );
}

export default WordComponent;
