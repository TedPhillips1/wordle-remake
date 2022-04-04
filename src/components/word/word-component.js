import BoxComponent from "../box/box-component";
import { Word } from "./word-styled";

function WordComponent({ word }) {
  return (
    <Word>
      <BoxComponent
        letter={word[0] ? word[0][0] : ""}
        distance={word[0] ? word[0][1] : ""}
      />
      <BoxComponent
        letter={word[1] ? word[1][0] : ""}
        distance={word[1] ? word[1][1] : ""}
      />
      <BoxComponent
        letter={word[2] ? word[2][0] : ""}
        distance={word[2] ? word[2][1] : ""}
      />
      <BoxComponent
        letter={word[3] ? word[3][0] : ""}
        distance={word[3] ? word[3][1] : ""}
      />
      <BoxComponent
        letter={word[4] ? word[4][0] : ""}
        distance={word[4] ? word[4][1] : ""}
      />
    </Word>
  );
}

export default WordComponent;
