import React from "react";
import Banner from "./Banner";
import Feature from "./Feature/Feature";
import Templatefroms from "./Templatefrom/Templatefroms";
import Template from "./TemplateSection/Template";

const Home = () => {
  return (
    <div>
      <Banner />
      <Template />
      <Feature />
      <Templatefroms />
    </div>
  );
};

export default Home;
