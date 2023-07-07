import { Book } from "./Book";
import { books } from "../data";

export const BookList = () => {
  return (
    <>
      <h1> Amazon Best Sellers</h1>
      <section className="bookList">
        {books.map((book) => {
          return <Book {...book} />;
        })}
      </section>
    </>
  );
};
