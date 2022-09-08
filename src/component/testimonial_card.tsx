interface Props {
  ratingStars: number;
  comment: string;
  profilePicture: string;
}

const TestimonialCard = ({ ratingStars, comment, profilePicture }: Props) => {
  return <li>TestimonialCard</li>;
};

export default TestimonialCard;
