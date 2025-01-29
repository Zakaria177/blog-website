import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

import Card from "./components/Card";
// import Data from "./data.json";
import Data from "./data.json"

export function App() {

  // // mapping items using for loop 
  // let items = [];
  // for (let i=0 ; i <Data.length; i ++){
  //    items.push (<Card tittleText = {Data[i].tittle} cartDes= { Data[i].textDes} />)
  // }


    //  Data.map((item) => <Card tittleText = {item.tittle} cartDes ={item.textDes} />  );

  return (
    <>
      <div>
        <h1 className="headingStyle">Todo App</h1>
        {/* <Card tittleText ="Call father" cartDes= "This is description 1" />
        <Card tittleText ="Mail Hr" cartDes= "About the interview" />
        <Card tittleText ="Finsih 1 hr " cartDes= "From video 9 to 1 atleast 15" /> */}

        {/* MAPING DATA TO COMPONENT USING LINE BY LINE  */}
      
        {/* <Card tittleText = {Data[0].tittle}cartDes= {Data [0].textDes} />
        <Card tittleText = {Data[1].tittle}cartDes= {Data [1].textDes} />
        <Card tittleText = {Data[2].tittle}cartDes= {Data [2].textDes} />
        <Card tittleText = {Data[3].tittle}cartDes= {Data [3].textDes} /> */}

        {/* {items} */} 

        {Data.map((item,index ) => <Card key ={index} tittleText = {item.tittle} cartDes ={item.textDes} />  )}
        
      </div>
    </>
  );
}
