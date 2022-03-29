import BoxComponent from "../box/box-component";
import { Word } from "./word-styled";

function WordComponent() {
  return (
    <Word>
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
    </Word>
  );
}

export default WordComponent;
