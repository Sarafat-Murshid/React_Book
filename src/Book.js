export const Book = (props) => {
  const { img, title, author, number } = props;
  //console.log(props);
  return (
    <div>
      <article className="book" id={number}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>
        <span className="key">{`# ${number + 1}`}</span>
      </article>
    </div>
  );
};
