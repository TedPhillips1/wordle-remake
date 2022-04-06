import BigKeyComponent from "../big-key/big-key-component";
import KeyComponent from "../key/key-component";
import { KBRow3 } from "./kb-r3-styled";

function KBRow3Component({ enter, keyArr, onClick, del, keyboard }) {
  return (
    <KBRow3>
      <BigKeyComponent onClick={enter} text="Enter" />
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
      <BigKeyComponent onClick={del} text="Delete" />
    </KBRow3>
  );
}

export default KBRow3Component;
