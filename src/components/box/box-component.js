import LetterComponent from "../letter/letter-component";
import NumberComponent from "../number/number-component";
import { Box } from "./box-styled";

function BoxComponent({ letter, distance }) {
  return (
    <Box distance={distance}>
      <LetterComponent letter={letter} />
      <NumberComponent distance={distance} />
    </Box>
  );
}

export default BoxComponent;
