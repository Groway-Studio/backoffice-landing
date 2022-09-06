import React from "react";
import { Box } from "@material-ui/core";
import { animateScroll as scroll } from "react-scroll";

import LogoGroway from "./../../assets/logo-groway.png";
import headerBg from "./../../assets/blob-header.svg";
import "./../../sass/shared/_header.scss";

class Header extends React.Component {
  scrollToSection = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <img src={headerBg} className="headerBg" alt="" />
        <Box
          className="navMenu"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={LogoGroway} alt="logo" />
        </Box>
      </>
    );
  }
}

export default Header;
