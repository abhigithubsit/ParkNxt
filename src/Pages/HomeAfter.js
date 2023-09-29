import React from "react";
import Navbar from "../Components/NavbarAfter";
import HeroAfter from "../Components/HeroAfter";
import About from "../Components/About";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <HeroAfter />
      <About />
      <Footer />
    </div>
  );
}

export default HomeAfter;
