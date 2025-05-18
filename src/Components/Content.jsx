import React from "react";
import styled from "styled-components";
import { useState } from "react";

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
  return (
    <main>
      <h1 style={handingStyle}>Main Content-{name}</h1>
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
      </Button>
    </main>
  );
}

export default Content;
