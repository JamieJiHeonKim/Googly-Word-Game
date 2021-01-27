import React, { useEffect, useState } from "react";
import Speech from "react-speech";
import Toast from "react-bootstrap/Toast";

export const Word = (props) => {
  const { color, word, index, onClick, youTyped } = props;
  const [body, setBody] = useState("Please type");
  const wordStyle = {
    backgroundColor: color,
    word: word,
    left: `${props.x}px`,
    top: `${props.y}px`,
  };
  useEffect(() => {
    if (youTyped === word) {
      setBody("Good job, you typed it!!");
    }
  }, [youTyped]);
  return (
    <div className="word" style={wordStyle} onClick={() => onClick(index)}>
      {word}
      <Speech text={word} textAsButton={true} displayText="♪" />
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Googly Bot</strong>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Word;
