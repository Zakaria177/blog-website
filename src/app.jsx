import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

import Card from "./components/Card";

export function App() {
  return (
    <>
      <div>
        <h1 className="headingStyle">Todo App</h1>

        <Card />
      </div>
    </>
  );
}
