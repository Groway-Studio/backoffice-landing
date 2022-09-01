import * as React from "react";
import "./../sass/component/_trial.scss";
import franja from "./../assets/franja-3.svg";
import ButtonComponent from "./shared/button";

export default function Hero() {
  return (
    <React.Fragment>
      <div className={"trialComponent"}>
        <img src={franja} alt="" />
        <div className="contentTrial">
          <h2>Pide tu periodo de prueba gratuito ahora?</h2>
          <br />
          <ButtonComponent label="Prueba Groway Backoffice" />
        </div>
      </div>
    </React.Fragment>
  );
}