import React, { useState } from "react";
import { Score } from "./Score";

export const UserInput = () => {
  const [word, setWord] = useState("");
  const [check, setCheck] = useState(false);

  // let match = false;

  // const checkAnswer = () => {
  //   let final = answer.word;
  //   if (word.toLowerCase() === final.toLowerCase()) {
  //     match = true;
  //   } else {
  //     match = false;
  //   }
  //   return match;
  // };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type the words"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </div>
    </>
  );
};
