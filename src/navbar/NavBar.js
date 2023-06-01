import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import MySkills from "./MySkills";
import Services from "./Services";
import Header from "../components/header/Header";
import Error from "./Error";

const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:title" element={<Home />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contact/:title" element={<Contact />}></Route>

          <Route path="/mywork" element={<MySkills />}></Route>
          <Route path="/mywork/:title" element={<MySkills />}></Route>

          <Route path="/services" element={<Services />}></Route>
          <Route path="/services/:title" element={<Services />}></Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
