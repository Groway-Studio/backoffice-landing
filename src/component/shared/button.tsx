import "./../../sass/shared/_button.scss";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
}

export default function ButtonComponent({ text, type }: Props) {
  return (
    <button type={type} className="btn-cta">
      {text}
    </button>
  );
}
