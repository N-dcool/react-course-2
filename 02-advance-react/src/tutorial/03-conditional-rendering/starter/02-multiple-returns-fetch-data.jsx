import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoding, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        setUser(data);
        // console.log(data);
        if (data) {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoding) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error : 🥲 try after sometime </h2>;
  }
  return (
    <section>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} />
      <h4>{user.company}</h4>
    </section>
  );
};
export default MultipleReturnsFetchData;
