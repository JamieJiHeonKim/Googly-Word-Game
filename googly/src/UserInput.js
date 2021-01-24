import React, { useState } from "react";
import { Score } from "./Score";

export const UserInput = ({ answer }) => {
  const [word, setWord] = useState("");

  let match = false;

  const checkAnswer = () => {
    let final = answer.word;
    if (word.toLowerCase() === final.toLowerCase()) {
      match = true;
    } else {
      match = false;
    }
    return match;
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      checkAnswer();
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
      <Score correct={match} />
    </>
  );
};
