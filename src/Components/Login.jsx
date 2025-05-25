import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  let { newUser } = useParams();
  console.log(newUser);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      Login - {newUser}
      <button onClick={handleNavigate}>Move to Home</button>
    </div>
  );
};

export default Login;
