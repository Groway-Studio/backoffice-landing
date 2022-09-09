import { fakeCustomers } from "../data";
import TestimonialCard from "./testimonial_card";
import "../sass/component/_testimonials.scss";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials__title">Opiniones</h2>

      <div className="testimonials__content">
        <ul className="testimonials__content_list">
          {fakeCustomers.map((customer) => (
            <TestimonialCard key={customer.id} {...customer} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
