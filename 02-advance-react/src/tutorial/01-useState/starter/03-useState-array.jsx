import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  // console.log(data);
  const [people, setData] = useState(data);

  const handleClick = (id) => {
    let newPeople = people.filter((item) => item.id !== id);
    setData(newPeople);
  };

  return (
    <div>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleClick(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => setData([])}
        style={{ marginTop: "2rem" }}
      >
        {" "}
        clear All
      </button>
    </div>
  );
};

export default UseStateArray;
