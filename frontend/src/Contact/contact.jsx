import React from "react";
import Navbar2 from "../components/Navbar2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function contact() {
  return (
    <>
      <div>
        <Navbar2 />
        <div className="min-h-screen">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default contact;
