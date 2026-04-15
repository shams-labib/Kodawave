import React from "react";
import Hero from "../../Pages/Hero";
import ClientLogos from "../../Pages/ClientLogos";
import KeyServices from "../../Pages/KeyServices";
import WhyChooseUs from "../../Pages/WhyChooseUs";
import Testimonials from "../../Pages/Testimonials";
import CTA from "../../Pages/CTA";
import FeatureScroll from "../../Pages/Feature/FeatureScroll";
import VisualSlider from "../../Pages/VisualSlider/VisualSlider";
import LegalPolicies from "../../Pages/LegalPolicies/LegalPolicies";

const Home = () => {
  return (
    <div>
      <Hero />
      <ClientLogos />
      <KeyServices />
      <FeatureScroll />
      <VisualSlider />
      <WhyChooseUs />
      <Testimonials />
      <LegalPolicies />
      <CTA />
    </div>
  );
};

export default Home;
