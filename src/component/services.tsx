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
              <p>Cuenta con un equipo contable a tu disposición para que puedas enfocarte en lo que más importa, hacer crecer tu negocio.</p>
            </div>
            <div className="col">
              <img src={assistanceIlus} className="assistanceIlus" alt="" />
              <h2>Asistente <br /> Virtual</h2>
              <p>Si la gestión administrativa de tu empresa ocupa el tiempo en el que podrías estar vendiendo tus servicios o productos, te brindamos un asistente virtual listo para atender las tareas de apoyo que necesites.</p>
            </div>
            <div className="col disabled">
              <img src={consultancyIlus} className="consultancyIlus" alt="" />
              <h2 className="disabled"> <span className="italic">Cooming Soon</span> Asesoría Legal</h2>
              <p>Cuenta con asesoría legal cuando la necesites para que puedas respaldar las decisiones de tu negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
