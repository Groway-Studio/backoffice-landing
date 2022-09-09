import "../sass/component/_testimonial_card.scss";

interface Props {
  ratingStars: string[];
  comment: string;
  profilePicture: string;
  unratingStars: string[];
}

const TestimonialCard = ({
  ratingStars,
  unratingStars,
  comment,
  profilePicture,
}: Props) => {
  return (
    <li className="testimonial__card">
      <div className="testimonial__card_content">
        {ratingStars.map((image, index) => (
          <img src={image} key={index} alt="rating star" draggable={false} />
        ))}

        {unratingStars.map((image, index) => (
          <img src={image} key={index} alt="unrating star" draggable={false} />
        ))}

        <p>{comment}</p>
      </div>

      <div className="testimonial__card_profile">
        <img
          className="testimonial__card_profile-picture"
          src={profilePicture}
          alt="profile pic"
          draggable={false}
        />
      </div>
    </li>
  );
};

export default TestimonialCard;
