/* eslint-disable no-unused-vars */
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Content from "./Components/Content";
import Counter from "./Components/Counter";
import { createContext, useState } from "react";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState({
    uName: "rithip",
    age: "35",
    email: "abc@gmail.com",
  });


  //console.log(userContext)

  return (
    <userContext.Provider value = {user}>
      <div className="App">
        <Header />
        <Content />
        <Footer props="hello" />
        {/* <Counter /> */}
      </div>
    </userContext.Provider>
  );
}

export default App;
