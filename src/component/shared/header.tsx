// import { useEffect, useState } from "react";

import LogoGroway from "./../../assets/logo-groway.svg";
import headerBg from "./../../assets/blob-header.svg";
import "./../../sass/shared/_header.scss";

const Header = () => {
  // const loggedIn: boolean = false;

  // const [checkedState, setCheckedState] = useState<boolean>(false);

  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));

  //   return () => window.removeEventListener("resize", () => {});
  // }, []);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   if (width > 767) {
  //     setCheckedState(false);
  //   }
  // }, [width]);

  return (
    <>
      <img src={headerBg} className="headerBg" alt="" draggable={false} />
      <nav className="navMenu">
        <img src={LogoGroway} alt="logo" />

        {/* <div className="mobile__menu_container">
          <input
            type="checkbox"
            name="show"
            id="show"
            checked={checkedState}
            onChange={() => setCheckedState(!checkedState)}
          />
          <label htmlFor="show" className="mobile__menu">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div>

        <ul
          className={`navMenu__options
          ${checkedState && width < 768 ? "block" : ""}
          `}
        >
          {!loggedIn && (
            <>
              <a href="#!" className="navMenu__options_item">
                <li>Iniciar Sesión</li>
              </a>
              <a href="#!" className="navMenu__options_item">
                <li>Registrarse</li>
              </a>
            </>
          )}
          {loggedIn && (
            <>
              <a href="#!" className="navMenu__options_item">
                <li>Mi Panel</li>
              </a>
              <a href="#!" className="navMenu__options_item">
                <li>Cerrar Sesión</li>
              </a>
            </>
          )}
        </ul> */}
      </nav>
    </>
  );
};

export default Header;
