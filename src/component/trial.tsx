import franja from "./../assets/franja-3.svg";
import "./../sass/component/_trial.scss";

export default function Trial() {
  return (
    <div className={"trialComponent"}>
      <img src={franja} alt="" />
      <div className="contentTrial">
        <h2>Pide tu periodo de prueba GRATIS!</h2>
        <br />
        <a href="#form" className="btn-cta">
          Pedir ahora
        </a>
      </div>
    </div>
  );
}
