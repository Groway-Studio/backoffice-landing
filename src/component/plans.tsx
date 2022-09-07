import elipseBlack from "./../assets/elipse-black.svg";
import elipseWhite from "./../assets/elipse-white.svg";
import "./../sass/component/_plans.scss";

export default function Plans() {
  return (
    <div className={"plansComponent"}>
      <h2>Planes</h2>
      <span>Lorem ipsum tus mejores ideas</span>

      <div className="row pricing">
        <div className="card">
          <h2>Basic</h2>
          <p>Ideal para independientes o startups en plena incubación.</p>
          <div className="list">
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asistente administrativo virtual</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Consultorio de negocios</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseWhite} alt="no" />
              </span>
              <span>Lorem ipsum tus</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseWhite} alt="no" />
              </span>
              <span>Lorem ipsum tus</span>
            </div>
          </div>
          <div className="price">
            <span>S/. 699</span>
            <p>mensual</p>
          </div>
        </div>

        <div className="card">
          <h2>Pro</h2>
          <p>
            Ideal para startups que ya están realizando sus primeras ventas.
          </p>
          <div className="list">
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asistente administrativo virtual</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Consultorio de negocios</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asesoría contable</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Declaración de impuestos</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Registro de libros contables</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Generación de balances y reportes</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Lorem ipsum tus</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseWhite} alt="no" />
              </span>
              <span>Lorem ipsum tus</span>
            </div>
          </div>
          <div className="price">
            <span>S/. 899</span>
            <p>mensual</p>
          </div>
        </div>

        <div className="card">
          <h2>Growth</h2>
          <p>
            Ideal para startups <br /> en crecimiento.
          </p>
          <div className="list">
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asistente administrativo virtual</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Consultorio de negocios</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asesoría contable</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Declaración de impuestos</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Registro de libros contables</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Generación de balances y reportes</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asistente virtual exclusivo</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Asesoría y acompañamiento legal</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Facturación electrónica</span>
            </div>
            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>...></div></span>
            </div>

            <div className="item">
              <span>
                <img src={elipseBlack} alt="yes" />
              </span>
              <span>Lorem ipsum tus</span>
            </div>
          </div>
          <div className="price">
            <span>Contáctanos</span>
            <p className="none">call us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
