import ContainerComponent from "../container/container-component";
import KeyboardComponent from "../keyboard/keyboard-component";
import WordComponent from "../word/word-component";
import { Main } from "./main-styled";
import { useReducer, useState } from "react";

const correct = 

const initialState = { word: [[], [], [], [], []], line: 0 };

function reducer(state, action) {
  switch (action) {
    case "Enter":
      console.log(state);
      if (state.word[state.line].length === 5) {
        return { ...state, line: state.line + 1 };
      } else {
        return state;
      }
    case "Delete":
      console.log(state);
      if (state.word[state.line].length !== 0) {
        return {
          ...state,
          word: [
            ...state.word.slice(0, state.line),
            state.word[state.line].slice(0, state.word[state.line].length - 1),
            ...state.word.slice(state.line + 1),
          ],
        };
      } else {
        return state;
      }
    default:
      console.log(state, action);
      if (state.word[state.line].length < 5) {
        return {
          ...state,
          word: [
            ...state.word.slice(0, state.line),
            [...state.word[state.line], action],
            ...state.word.slice(state.line + 1),
          ],
        };
      } else {
        return state;
      }
  }
}

function MainComponent() {
  const [word, dispatch] = useReducer(reducer, initialState);
  const [line, setLine] = useState(0);

  return (
    <Main>
      <ContainerComponent words={word} />
      <KeyboardComponent
        dispatch={dispatch}
        enter={() => {
          dispatch("Enter");
        }}
        del={() => {
          dispatch("Delete");
        }}
      />
    </Main>
  );
}

export default MainComponent;
