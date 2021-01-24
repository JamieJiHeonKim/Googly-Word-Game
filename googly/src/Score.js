import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Button, ScoreFont } from "./Style";
import { ConfettiAnimation } from "./Confetti";

export const Score = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [recycle, setRecycle] = useState(0);
  useEffect(() => {
    if (count === 10) {
      setAnimate(true);
      setRecycle(200);
    } else {
      setAnimate(false);
      setRecycle(0);
    }
  });
  return (
    <>
      <ConfettiAnimation run={animate} numberOfPieces={recycle} />
      <ScoreFont>Score</ScoreFont>
      <ReactStoreIndicator
        value={count}
        maxValue={100}
        lineWidth={15}
        lineGap={3}
        fadedOpacity={20}
      />
      <Button buttonColor="green" onClick={() => setCount(count + 1)}>
        Click Bait
      </Button>
    </>
  );
};
