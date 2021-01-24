import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Button, ScoreFont } from "./Style";

import { ConfettiAnimation } from "./Confetti";

export const Score = ({ change }) => {
  const [count, setCount] = useState(0);
  const [recycle, setRecycle] = useState(false);

  useEffect(() => {
    if (
      (count === 20) |
      (count === 40) |
      (count === 60) |
      (count === 80) |
      (count === 100) |
      (count === 120) |
      (count === 140)
    ) {
      setRecycle(true);
    } else {
      setRecycle(false);
    }
    // if (input.toLowerCase() === correct.toLowerCase()) {
    //   setCount(count + 5);
    // }
    if (change) {
      setCount(change);
    }
  }, [change]);

  return (
    <>
      <ConfettiAnimation run={true} recycle={recycle} />

      <ScoreFont>Score</ScoreFont>
      <ReactStoreIndicator
        value={count}
        maxValue={1000}
        lineWidth={15}
        lineGap={3}
        fadedOpacity={20}
      />
    </>
  );
};
