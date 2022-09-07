import React, { Fragment } from "react";
import "./header.css";
import logo from "../../assets/icon/LogoO.png";

const Header = () => {
  const data = {
    imagen: logo,
    a: "Know our team",
  };

  return (
    <Fragment>
      <header>
        <img src={data.imagen} alt="Innovation Lab Logo" />
        <div className="header--title-container">
          <a href="#team" className="header--button">
            {data.a} <span></span>
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
