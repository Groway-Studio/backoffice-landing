import * as React from "react";
import "./../sass/component/_services.scss";
import calculatorIlus from "./../assets/calculator.svg";
import assistanceIlus from "./../assets/assistance.svg";
import consultancyIlus from "./../assets/consultancy.svg";

export default function Hero() {
  return (
    <React.Fragment>
      <div className={"servicesComponent"}>
        <div className="contentServices">
          <h2>Servicios de BackOffice</h2>
          <span>Para emprendedores, freelancers y nómadas digitales</span>
          <div className="row mt-4">
            <div className="col">
              <img src={calculatorIlus} className="calculatorIlus" alt="" />
              <h2>Gestión contable y tributaria</h2>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="col">
              <img src={assistanceIlus} className="assistanceIlus" alt="" />
              <h2>Asistente <br /> Virtual</h2>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="col disabled">
              <img src={consultancyIlus} className="consultancyIlus" alt="" />
              <h2 className="disabled"> <span className="italic">Cooming Soon</span> Asesoría Legal</h2>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
