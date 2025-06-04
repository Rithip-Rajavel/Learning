import { Link } from "react-router-dom";

const Home = () => {
  const user = "Rithip";
  return (
    <div>
      <h1>Show from HomePage</h1>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to={`/login/${user}`}>Login</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/todo">TodoList</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
