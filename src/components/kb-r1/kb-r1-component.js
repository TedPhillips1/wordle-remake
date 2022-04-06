import KeyComponent from "../key/key-component";
import { KBRow1 } from "./kb-r1-styled";

function KBRow1Component({ keyArr, onClick, keyboard }) {
  return (
    <KBRow1>
      {keyArr.map((letter, index) => {
        return (
          <KeyComponent
            key={index}
            keyboard={keyboard[index]}
            letter={letter}
            onClick={() => onClick(letter)}
          />
        );
      })}
    </KBRow1>
  );
}

export default KBRow1Component;
