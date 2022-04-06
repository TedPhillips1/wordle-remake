import ContainerComponent from "../container/container-component";
import KeyboardComponent from "../keyboard/keyboard-component";
import { Main } from "./main-styled";
import { useReducer, useState } from "react";
import { wordsArr, words, pickWord } from "../../words";
import { checkWord } from "../../check-word";
import { keyboardUpdate } from "../../keyboard-update";

const wordArr = wordsArr(words);
const correct = pickWord(wordArr);

const initialState = {
  word: [[], [], [], [], []],
  line: 0,
  keyboard: [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ],
};

function reducer(state, action) {
  switch (action) {
    case "Enter":
      console.log(correct);
      const checkedArr = checkWord(correct, state.word[state.line]);
      const updatedKeyboard = keyboardUpdate(state.keyboard, checkedArr);
      console.log(updatedKeyboard);
      if (state.word[state.line].length === 5) {
        return {
          ...state,
          word: [
            ...state.word.slice(0, state.line),
            checkedArr,
            ...state.word.slice(state.line + 1),
          ],
          line: state.line + 1,
          keyboard: updatedKeyboard,
        };
      } else {
        return state;
      }
    case "Delete":
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
      console.log(state);
      if (state.word[state.line].length < 5) {
        return {
          ...state,
          word: [
            ...state.word.slice(0, state.line),
            [...state.word[state.line], [action, false]],
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
        keyboard={word.keyboard}
      />
    </Main>
  );
}

export default MainComponent;
