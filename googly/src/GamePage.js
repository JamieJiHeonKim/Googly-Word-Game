import React from "react";

import { ConfettiAnimation } from "./Confetti";
import { RecoilRoot } from "recoil";
import { Animation } from "./Animation";

export const GamePage = () => {
  return (
    <>
      <ConfettiAnimation run={false} />
      <div>
        <RecoilRoot>{<Animation />}</RecoilRoot>
      </div>
    
    </>
  );
};
