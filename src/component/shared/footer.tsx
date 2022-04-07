import * as React from "react";
import LogoGrowayWhite from "./../../assets/logo-white.png";
import "./../../sass/shared/_footer.scss";
import fbIlus from "./../../assets/ic-socials-2.svg";
import linkedinIlus from "./../../assets/ic-socials-1.svg";
import igIlus from "./../../assets/ic-socials.svg";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footerComponent">
        <section className="container">
          <aside className="logoSection">
            <img src={LogoGrowayWhite} alt="" />
          </aside>
          <aside className="ctaSection">
            <article>Escribenos a: <strong> <br/>hola@groway.studio</strong> </article>
            <article className="socials">
              <img src={fbIlus} alt="" />
              <img src={linkedinIlus} alt="" />
              <img src={igIlus} alt="" />
            </article>
          </aside>
          <aside className="ubication">
            <article>
            <strong>Perú</strong> <br/> AV. El Derby 055 Edificio Cronos, Torre 1 Piso 7 Santiago de
              Surco Lima - Perú
            </article>
            <article> <strong>EE.UU</strong><br/> +1 786 7558193</article>
            <article> <strong>Argentina</strong><br/> +54 11 52175854</article>
            <article> <strong>Colombia</strong><br/> +57 15800311</article>
          </aside>
        </section>
      </div>
    </React.Fragment>
  );
}
