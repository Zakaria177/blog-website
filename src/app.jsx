import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
const todoTittle = "Call family";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const Year = date.getFullYear();

// adding style inside javascript using js
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
        <div className="card">
          <h3 className="cardTitle">{todoTittle}</h3>
          <p className="cardDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            ipsum!
          </p>
          <p className="cardFooter">
            {dateName + "/" + monthName + "/" + Year}
          </p>
        </div>
      </div>
    </>
  );
}
