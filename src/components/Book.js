export const Book = (props) => {
  const { src, title, author, id } = props;
  return (
    <article className="book">
      <img src={src} alt="1" />
      <h2> {title} </h2>
      <h4>{author}</h4>
      <span className="number">{`# ${id}`}</span>
    </article>
  );
};
