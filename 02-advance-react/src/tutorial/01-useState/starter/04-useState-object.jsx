import { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Chirag",
    age: 21,
    message: "Hello from Chirag",
  });

  const handleClick = () => {
    setPeople({ name: "Naresh", age: 22, message: "Hello from Naresh" });
  };

  return (
    <div className="container">
      <h2>{people.name}</h2>
      <h2>{people.age}</h2>
      <h2>Message : {people.message}</h2>
      <button className="btn" onClick={handleClick}>
        {" "}
        show Naresh{" "}
      </button>
    </div>
  );
};

export default UseStateObject;
