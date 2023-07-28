import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentCount) => {
      let newState = currentCount + 1;
      // console.log(newState);
      return newState;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        {" "}
        increament{" "}
      </button>
    </div>
  );
};

export default UseStateGotcha;
