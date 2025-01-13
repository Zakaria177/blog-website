import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
const todoTittle = "Call family";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const Year = date.getFullYear();

// const headingStyle = {
//   backgroundColor: "green",
//   textAlign: "center",
//   color: "white",
//   padding: "10 px",
// };

export function App() {
  return (
    <>
      <div>
        <h1 className="headingStyle">Todo App</h1>
        <h3>{todoTittle}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsum!
        </p>
        <p>{dateName + "/" + monthName + "/" + Year}</p>
      </div>
    </>
  );
}
