import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <ul>
    <li>
      <Link to="/"> Home</Link>
    </li>
    <li>
      <Link to="/counter"> Counter </Link>
    </li>
    <li>
      <Link to="/game"> Game </Link>
    </li>
  </ul>
);
