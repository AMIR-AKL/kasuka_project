import { Profiler, useState } from "react";
import Header from "./components/Header/Header";
import DiscKasuka from "./components/DicsKasuka/DiscKasuka";
import Slider from "./components/Slider/Slider";
import Feature from "./components/Features/Feature";
import Services from "./components/Services/Services";
import Cta from "./components/Cta/Cta";
import Portfolio from "./components/Portfolio/Portfolio";
import Counts from "./components/Counts/Counts";
import ProfilePrallex from "./components/Profile/ProfileParallex";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <DiscKasuka></DiscKasuka>
      <Slider></Slider>
      <Feature></Feature>
      <Services></Services>
      <Cta></Cta>
      <Portfolio></Portfolio>
      <Counts></Counts>
      <ProfilePrallex></ProfilePrallex>
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
