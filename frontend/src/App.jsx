import React from "react";
import Home from "./home/Home";
import Course from "./Courses/courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./Contact/contact";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={auth ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
