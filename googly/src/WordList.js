import { Button, DangerButton } from "./Style";
import React, { useState } from "react";

export const WordList = ({key, value}) => {
  const [word, setWord] = useState("");
  let match = false;
  let list_word = [{}];

  function checkAnswer(word, answer) {
    if (word.toLowerCase() === answer.toLowerCase()) {
        match = true;    
    }
    else {
        match = false;
    }
    return match;
  }

  return (
    <>
      <div>
        <input
            type="text"
            placeholder="Type the words"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            //checkAnswer(${word}, key)
        />
      </div>
      <Button
        buttonColor="orange"
        onClick={(e) => {
            list_word.push({key, value});
            console.log(list_word);
            console.log(key,value);
        }}
      >
        Submit
      </Button>
    </>
  );
};
