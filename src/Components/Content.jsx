/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Shop from "./Shop";

let handingStyle = {
  backgroundColor: "red",
  color: "#fff",
  boxShadow: "10px 10px 5px black",
};

let Button = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
`;

const NewButton = styled(Button)`
  box-shadow: 5px 5px 5px black;
`;

function HandleButton(name) {
  // console.log(e.target.innerText)
  name("Rithip");
  console.log(name);
}

function HandleButton1(name) {
  // console.log(event.target.innerText)
  name("Vanmathi");
  console.log(name);
}

function Content() {
  const [name, setName] = useState("Archana");

  const [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaSript", checked: true },
    { id: 3, label: "React", checked: false },
    { id: 4, label: "Nodejs", checked: false },
  ]);
  return (
    <main>
      {/* <h1 style={handingStyle}>Main Content-{name}</h1>
      <Button onClick={() => HandleButton(setName)}>Click me</Button>
      <Button
        onClick={() => {
          HandleButton1(setName);
        }}>
        Dublicate
      </Button>
      <Button
        onClick={() => {
          setName("Archana");
        }}>
        reset
      </Button> */}

      {/* <Shop /> */}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkBox" checked={item.checked}/>
              <label>{item.label}</label>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Content;
