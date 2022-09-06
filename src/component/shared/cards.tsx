import "./../../sass/shared/_cards.scss";

interface Props {
  image: string;
  titleCard: string;
  detail: string;
}

export default function CardComponent({ image, titleCard, detail }: Props) {
  return (
    <div className="CardComponent">
      <img src={image} alt={titleCard} />
      <h3>{titleCard}</h3>
      <p>{detail}</p>
    </div>
  );
}
