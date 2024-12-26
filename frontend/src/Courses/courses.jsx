import React from "react";
import Footer from "../components/Footer";
import Course from "../components/Course";
import Navbar2 from "../components/Navbar2";
import list from "../../public/list.json";

function courses() {
  console.log(list);
  return (
    <div>
      <Navbar2 />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default courses;
