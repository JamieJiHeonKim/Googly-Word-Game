import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { controlOptions, wordsState, scoreState } from "./Atom";
import { SPEED_STEP, SPAWN_INTERVAL } from "./Constants";
import { createWord, removeWord } from "./Utils";

import { Word } from "./Word";
import { Control } from "./Control";
import { UserInput } from "./UserInput";
import { Score } from "./Score";

export const Animation = () => {
  // <h1>Animation is working.</h1>
  // const wordsArr = [{ text: "test", x: 100, y: 100 }, { text: "hello", x: 200, y: 300 }];
  const [words, updateWords] = useRecoilState(wordsState);
  const [controlState, setControlState] = useRecoilState(controlOptions);

  const [input, setInput] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [count, setCount] = useState(false);
  // const [score, setScore] = useRecoilState(scoreState);

  const requestRef = useRef();
  const intervalRef = useRef();
  const fieldRef = useRef();

  // console.log("WORDS BACK IN ANIMATION---->", createWord());

  const advanceStep = useCallback(() => {
    updateWords((oldWords) => {
      const newWords = [];
      for (let word of oldWords) {
        const newY = word.y + (SPEED_STEP * controlState.speed) / 60;
        if (newY <= fieldRef.current.offsetHeight - word.size / 2) {
          newWords.push({
            ...word,
            y: newY,
          });
          // console.log("NEW WORDSSSSSS---->", newWords);
        }
      }
      return newWords;
    });
    requestRef.current = requestAnimationFrame(advanceStep);
  }, [controlState.speed, updateWords]);

  const spawnWord = useCallback(() => {
    updateWords((oldWords) => [...oldWords, createWord()]);
  }, [updateWords]);

  useEffect(() => {
    const stop = () => {
      intervalRef.current && clearInterval(intervalRef.current);
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };

    if (controlState.isRunning) {
      intervalRef.current = setInterval(spawnWord, SPAWN_INTERVAL);
      requestRef.current = requestAnimationFrame(advanceStep);
    } else {
      stop();
    }
    return () => stop();
  }, [controlState.isRunning, advanceStep, spawnWord]);

  const clear = useCallback(() => {
    setControlState({ ...controlState, isRunning: false, speed: 5 });
    updateWords([]);
    // setScore(0);
  }, [setControlState, updateWords, controlState]);
  // }, [setControlState, setScore, updateDots, controlState]);

  // console.log("OLD WORDS -------->", updateWords);

  const onWordClick = (index) => {
    // setScore(score + calculatePoints(dots[index]));
    //updateWords(removeWord(words, index));
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      console.log(input);
      console.log(currentWord);
      if (input.toLowerCase() === currentWord.toLowerCase()) {
        setCount(true);
      }
      setInput("");
    }
  };

  return (
    <div className="main">
      <div>
        <Score change={count} />
      </div>
      <div className="panel">
        <Control onClear={clear} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="field" ref={fieldRef}>
        {words.map((word, index) => {
          const x = ((fieldRef.current.offsetWidth - word.size) * word.x) / 100;
          //setCurrentWord(word);
          return (
            <>
              <div>
                <Word
                  key={word.text}
                  {...word}
                  x={x}
                  index={index}
                  onClick={onWordClick}
                />
              </div>
            </>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type the words"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
    // wordsArr.map((word, => (
    //     <Word text={word.text} key={word.text} x={word.x} y={word.y} size="40" />
    // ))

    // {/* <Word
    //     // word="TEST"
    //     color="red"
    //     x="100" y="200"
    //     // onClick={() => {}}
    //     size="40"
    // />
    // <Word
    //     // word="test2"
    //     color="green"
    //     x="200" y="300"
    //     // onClick={() => {}}
    //     size="35" /> */}
    // {/* </div> */}
    // </div>
  );
};

export default Animation;
// const =[{text1: xxx}, {...}...]
//
