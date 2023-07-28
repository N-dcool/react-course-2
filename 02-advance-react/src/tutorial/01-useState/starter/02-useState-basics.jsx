import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h2>{count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        increament
      </button>
      &nbsp;
      <button className="btn" onClick={() => setCount(count - 1)}>
        decreament
      </button>
    </div>
  );
};

export default UseStateBasics;
