import WordComponent from "../word/word-component";
import { Container } from "./container-styled";

function ContainerComponent({ words }) {
  return (
    <Container>
      <WordComponent word={words.word[0]} />
      <WordComponent word={words.word[1]} />
      <WordComponent word={words.word[2]} />
      <WordComponent word={words.word[3]} />
      <WordComponent word={words.word[4]} />
    </Container>
  );
}

export default ContainerComponent;
