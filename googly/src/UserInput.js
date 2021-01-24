import React from "react";

export const UserInput = () => {
  const [word, setWord] = useState("");
  let match = false;

  const checkAnswer = ({ word, answer }) => {
    if (word.toLowerCase() === answer.toLowerCase()) {
      match = true;
    } else {
      match = false;
    }
    return match;
  };

  onKeyPress = (e) => {
    if (e.which === 13) {
      checkAnswer(word, value[0]);
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
          onKeyPress={this.onKeyPress}
        />
      </div>
      <Score correct={match} />
    </>
  );
};
