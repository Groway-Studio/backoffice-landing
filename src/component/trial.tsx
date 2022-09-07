import { ButtonComponent } from "./shared";

import franja from "./../assets/franja-3.svg";
import "./../sass/component/_trial.scss";

export default function Trial() {
  return (
    <div className={"trialComponent"}>
      <img src={franja} alt="" />
      <div className="contentTrial">
        <h2>Pide tu periodo de prueba GRATIS!</h2>
        <br />
        <ButtonComponent label="Pedir ahora" />
      </div>
    </div>
  );
}
