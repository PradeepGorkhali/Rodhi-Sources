import React from "react";
import Banner from "../components/Banner/Index";
import Talk from "../components/Talk/Index";
import Whyrodhi from "../components/WhyRodhi/Index";
import Aboutus from "../components/AboutUs/index";

function Home() {
  return (
    <div>
      <Banner />
      <Talk />
      <Whyrodhi />
      <Aboutus />
    </div>
  );
}

export default Home;
