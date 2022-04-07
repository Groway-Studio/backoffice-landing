import * as React from "react";
import "./../sass/component/_hero.scss";

import ilusHero from "./../assets/ilus-hero.svg";


export default function Hero() {
  return (
    <React.Fragment>
      <div className={"heroComponent"}>
        <div className="contentHero">
          <div><h1>Groway</h1></div>
          <div><span>BackOffice</span></div>
        </div>
        <img src={ilusHero} className="ilusHero" alt="" />
      </div>
    </React.Fragment>
  );
}
