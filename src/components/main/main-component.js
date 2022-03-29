import ContainerComponent from "../container/container-component";
import KeyboardComponent from "../keyboard/keyboard-component";
import WordComponent from "../word/word-component";
import { Main } from "./main-styled";

function MainComponent() {
  return (
    <Main>
      <ContainerComponent />
      <KeyboardComponent />
    </Main>
  );
}

export default MainComponent;
