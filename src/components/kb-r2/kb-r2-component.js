import { KBRow2 } from "./kb-r2-styled";
import KeyComponent from "../key/key-component";

function KBRow2Component({ keyArr, onClick }) {
  return (
    <KBRow2>
      {keyArr.map((letter, index) => {
        return (
          <KeyComponent
            key={index}
            letter={letter}
            onClick={() => onClick(letter)}
          />
        );
      })}
    </KBRow2>
  );
}

export default KBRow2Component;
