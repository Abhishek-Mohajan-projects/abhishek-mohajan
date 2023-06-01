import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <div className="navBar">
      <nav>
        {(toggleMenu || screenWidth > 640) && (
          <ul className="list">
            <NavLink
              to="/"
              className="m-4 hover:text-orange-700 transition ease-in-out hover:border-b items hover:border-orange-500 hover:pb-2 "
            >
              Home
            </NavLink>

            <NavLink
              to="/contact"
              className="m-4 hover:text-orange-700 transition ease-in-out hover:border-b items hover:border-orange-500 hover:pb-2"
            >
              Contact
            </NavLink>

            <NavLink
              to="/mywork"
              className="m-4 hover:text-orange-700 transition ease-in-out hover:border-b items hover:border-orange-500 hover:pb-2"
            >
              My Skills
            </NavLink>

            <NavLink
              to="/services"
              className="m-5 hover:text-orange-700 hover:border-b hover:border-orange-500 items hover:pb-2 transition ease-in-out"
            >
              Services
            </NavLink>
          </ul>
        )}
        <button onClick={toggleNav} className="btns">
          <Hamburger />
        </button>
      </nav>
    </div>
  );
};
export default Header;
