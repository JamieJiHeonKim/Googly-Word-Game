import React, { useState } from "react";
import PlayGame from "./PlayGame";
import { Score } from "./Score";
import { ConfettiAnimation } from "./Confetti";

export const GamePage = () => {
  return (
    <>
      <ConfettiAnimation run={false} />
      <Score />
      <PlayGame />
    </>
  );
};
