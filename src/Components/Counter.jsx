import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 45px;
  background-color: blue;
  color: white;
`;
function Counter() {
  const [Count, setCount] = useState(0);

  function HandleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function HandleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <div>
        {/* <h1>Counter Application - {Count}</h1>
                <button onClick={HandleIncrement}>Increment</button>
                <button onClick={HandleDecrement}>Decrement</button> */}
      </div>
      <div>
        <h1>Click to unlock your rewards</h1>
        <Button onClick={HandleIncrement}>Click Me</Button>
        {Count >= 10 ? (
          <p>You unlock 10% Discount</p>
        ) : (
          <p>Click 10 times to unlock the reward</p>
        )}

        {Count >= 20 && <p>You are a Handworker</p>}
      </div>
    </div>
  );
} 
export default Counter;
