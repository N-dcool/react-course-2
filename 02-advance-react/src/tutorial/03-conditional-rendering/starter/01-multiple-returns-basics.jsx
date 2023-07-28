import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // fetching is Done :)
      setIsLoding(false);
    }, 1000);
  });

  if (isLoding) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
