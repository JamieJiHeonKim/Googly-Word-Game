import React, { useCallback, useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { controlOptions, wordsState } from "./Atom";
import { SPEED_STEP, SPAWN_INTERVAL } from "./Constants";
import { createWord, removeWord } from "./Utils";

import { Word } from "./Word";
import { Control } from "./Control";
import { Score } from "./Score";

export const Animation = () => {
  const [words, updateWords] = useRecoilState(wordsState);
  const [controlState, setControlState] = useRecoilState(controlOptions);

  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const requestRef = useRef();
  const intervalRef = useRef();
  const fieldRef = useRef();

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
  }, [setControlState, updateWords, controlState]);


  const onWordClick = (index) => {
    updateWords(removeWord(words, index));
    setCount(count + 1);
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
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
          return (
            <>
              <div>
                <Word
                  key={word.text}
                  {...word}
                  x={x}
                  index={index}
                  onClick={onWordClick}
                  youTyped={input}
                />
              </div>
            </>
          );
        })}
      </div>
      <br></br>

      <div>
        <input
          className="clean-textbox"
          type="text"
          placeholder="Type the words"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Animation;