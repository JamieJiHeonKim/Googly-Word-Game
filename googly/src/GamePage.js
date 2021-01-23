import { Button, DangerButton } from "./Style";
import React, { useState } from "react";

export const GamePage = () => {
  //const [clicks, setClicks] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      {/* <p>{clicks}</p>
      <DangerButton onclick={setClicks(clicks - 1)}>Don't CLick</DangerButton>
      <Button buttonColor="green" onclick={setClicks(clicks + 1)}>
        Click Me
      </Button> */}
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button
        buttonColor="orange"
        onClick={(e) => {
          alert(`You typed ${name}`);
          e.preventDefault();
        }}
      >
        Submit
      </Button>
    </>
  );
};
