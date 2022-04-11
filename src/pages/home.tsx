import * as React from "react";
import Header from "../component/shared/header";
import Hero from "../component/hero";
import FormContact from "../component/form";
import Footer from "../component/shared/footer";
import Services from "../component/services";
import Trial from "../component/trial";
import Plans from "../component/plans";

export default function Home() {
  return (
    <React.Fragment>
      <div className="box">
        <Header />
        <Hero />
        <Services />
        <Trial />
        <Plans />
        <FormContact />
        <Footer /> 
     
      </div>
    </React.Fragment>
  );
}
