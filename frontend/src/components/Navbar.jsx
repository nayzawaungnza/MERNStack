import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-5">
        <div>
          <h1 className="font-bold text-2xl text-orange-400">Recipicity</h1>
        </div>
        <ul className=" flex space-x-10">
          <li>
            <NavLink to="/" className="hover:text-orange-400 ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-orange-400 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-orange-400 ">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
