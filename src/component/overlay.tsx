import { useState } from "react";

import { Input } from "./shared/forms";
import "../sass/component/_overlay.scss";

const Overlay = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="overlay">
      <h2 className="overlay__title">
        Lo lamentamos, por ahora este servicio sólo está disponible para{" "}
        <span>Perú</span>.
      </h2>

      <section className="overlay__content">
        <p className="overlay__content_description">
          Déjanos tu correo y te avisaremos cuando esté disponible para tu país.
        </p>

        <form className="overlay__content_form">
          <Input
            className="overlay__content_input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@groway.studio"
          />

          <button className="overlay__content_button">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Overlay;
