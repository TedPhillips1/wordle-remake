import WordComponent from "../word/word-component";
import { Container } from "./container-styled";

function ContainerComponent() {
  return (
    <Container>
      <WordComponent />
      <WordComponent />
      <WordComponent />
      <WordComponent />
      <WordComponent />
    </Container>
  );
}

export default ContainerComponent;
