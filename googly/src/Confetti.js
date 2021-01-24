import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export const ConfettiAnimation = ({ run, recycle }) => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} run={run} recycle={recycle} />;
};
