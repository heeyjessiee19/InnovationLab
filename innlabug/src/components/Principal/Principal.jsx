import React, { Fragment } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Team from "../Team/Team";
import What from "../What/What";

const Principal = () => {
  return (
    <Fragment>
      <Header />
      <What />
      <About /> 
      <Team />
      <Footer />
    </Fragment>
  );
};

export default Principal;
