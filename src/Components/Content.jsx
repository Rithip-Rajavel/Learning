/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Shop from "./Shop";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
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

  const [text, setText] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentElementID, setElementID] = useState(null);
  const handlechecked = (id) => {
    const newItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(newItems);
  };

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (id) => {
    const newItem = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(newItem);
  };

  const handleAddorSave = () => {
    if (!isEdit) {
      setItems([
        ...items,
        { id: items.length + 1, label: text, checked: false },
      ]);
    } else {
      const newItem = items.map((item) => {
        return item.id === currentElementID ? { ...item, label: text } : item;
      });
      setItems(newItem);
      setElementID(null);
      setIsEdit(false);
    }
    setText("");
  };

  const handleUpdate = (id) => {
    setIsEdit(true);
    setElementID(id);
    const getItem = items.find((item) => item.id === id);
    setText(getItem.label);
  };

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
      <input
        type="text"
        placeholder="add someting "
        value={text}
        onChange={handleOnchange}
      ></input>
      <button onClick={handleAddorSave}>
        {isEdit ? (
          <IoMdSave color="green" />
        ) : (
          <MdAddToPhotos color="lightblue" />
        )}
      </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkBox"
                checked={item.checked}
                value={text}
                onChange={(e) => {
                  handlechecked(item.id);
                }}
              />
              <label>{item.label}</label>
              <FaEdit
                role="button"
                onClick={() => handleUpdate(item.id)}
                tabIndex={0}
              />
              <FaTrashCan
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Content;
