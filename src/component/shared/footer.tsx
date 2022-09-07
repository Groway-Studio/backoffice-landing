import LogoGrowayWhite from "./../../assets/logo-white.png";
import fbIlus from "./../../assets/ic-socials-2.svg";
import linkedinIlus from "./../../assets/ic-socials-1.svg";
import igIlus from "./../../assets/ic-socials.svg";
import "./../../sass/shared/_footer.scss";

export default function Footer() {
  return (
    <div className="footerComponent">
      <section className="container">
        <aside className="logoSection">
          <img src={LogoGrowayWhite} alt="" />
        </aside>
            <aside className="ctaSection">
          <article>
            Escríbenos a:
            <a href="mailto:hola@groway.studio">hola@groway.studio</a>
          </article>
          <article className="socials">
            <a
              href="https://www.instagram.com/groway.studio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={igIlus} alt="Groway.Studio" />
            </a>
            <a
              href="https://www.linkedin.com/company/growaystudio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIlus} alt="Groway.Studio" />
            </a>
            <a
              href="https://www.facebook.com/groway.studio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbIlus} alt="Groway.Studio" />
            </a>
          </article>
        </aside>
        <aside className="ubication">
          <article>
            <strong>Perú</strong> <br /> AV. El Derby 055 Edificio Cronos, Torre
            1 Piso 7 Santiago de Surco Lima - Perú
          </article>
          <article>
            <strong>EE.UU</strong>
            <a href="tel:+1 786 7558193">+1 786 7558193</a>
          </article>
          <article>
            <strong>Argentina</strong>
            <a href="tel:+54 11 52175854">+54 11 52175854</a>
          </article>
          <article>
            <strong>Colombia</strong>
            <a href="tel:+57 15800311">+57 15800311</a>
          </article>
        </aside>
      </section>
    </div>
  );
}
