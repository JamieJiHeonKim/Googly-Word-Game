import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Button, ScoreFont } from "./Style";

import { ConfettiAnimation } from "./Confetti";

export const Score = ({ change }) => {
  const [count, setCount] = useState(0);
  const [recycle, setRecycle] = useState(false);

  useEffect(() => {
    if (
      (count === 9) |
      (count === 19) |
      (count === 29) |
      (count === 39) |
      (count === 49) |
      (count === 59) |
      (count === 69)
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
        maxValue={100}
        lineWidth={15}
        lineGap={3}
        fadedOpacity={20}
      />
    </>
  );
};
