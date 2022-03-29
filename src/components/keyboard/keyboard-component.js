import KBRow1Component from "../kb-r1/kb-r1-component";
import KBRow2Component from "../kb-r2/kb-r2-component";
import KBRow3Component from "../kb-r3/kb-r3-component";
import { Keyboard } from "./keyboard-styled";
import { useReducer } from "react";

const keyArr = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const initialState = [];

function reducer(state, action) {
  switch (action) {
    case "Enter":
      console.log(state);
      return state;
    case "Delete":
      console.log(state);
      if (state.length !== 0) {
        return state.slice(0, state.length - 1);
      } else {
        return state;
      }
    default:
      console.log(state, action);
      if (state.length < 5) {
        return [...state, action];
      } else {
        return state;
      }
  }
}

function KeyboardComponent() {
  const [word, dispatch] = useReducer(reducer, initialState);

  return (
    <Keyboard>
      <KBRow1Component keyArr={keyArr.slice(0, 10)} onClick={dispatch} />
      <KBRow2Component keyArr={keyArr.slice(10, 19)} onClick={dispatch} />
      <KBRow3Component
        keyArr={keyArr.slice(19)}
        onClick={dispatch}
        enter={() => {
          dispatch("Enter");
        }}
        del={() => {
          dispatch("Delete");
        }}
      />
    </Keyboard>
  );
}

export default KeyboardComponent;
