import ilusHero from "./../assets/ilus-hero.svg";
import "./../sass/component/_hero.scss";

export default function Hero() {
  return (
    <div className={"heroComponent"}>
      <div className="contentHero">
        <div>
          <h1>Groway</h1>
        </div>
        <div>
          <span>BackOffice</span>
        </div>
        <p>Para emprendedores, freelancers y nómadas digitales</p>

        <a href="#form" className="contentHero__button">
          Prueba gratis
        </a>
      </div>
      <img src={ilusHero} className="ilusHero" alt="HeroImage" />
    </div>
  );
}
