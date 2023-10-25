import "./Card.css";

function Card({
  // eslint-disable-next-line react/prop-types
  title = "titulo por defecto",
  // eslint-disable-next-line react/prop-types
  description = "Descripcion por defecto",
}) {
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
