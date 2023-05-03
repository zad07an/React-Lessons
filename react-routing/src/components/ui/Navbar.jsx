import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const activeLink = ({ isActive }) => ({ color: isActive ? "orange" : null });

  return (
    <header className=" w-full px-[120px] h-[60px] flex justify-center bg-gray-800">
      <nav className=" w-full h-full grid grid-cols-3">
        <div className=" flex items-center">
          <NavLink
            to="/"
            className=" text-2xl text-white uppercase font-medium"
          >
            Logo
          </NavLink>
        </div>
        <ul className=" flex items-center justify-center gap-6">
          <li>
            <NavLink
              to="/"
              className=" text-white transition-all"
              style={activeLink}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className=" text-white transition-all"
              style={activeLink}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className=" text-white transition-all"
              style={activeLink}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className=" text-white transition-all"
              style={activeLink}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className=" text-white transition-all"
              style={activeLink}
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <div className=" flex items-center justify-end">
          <button
            className=" px-8 py-1 bg-orange-600 text-white rounded-md uppercase"
            onClick={() =>
              navigate("/contact", { state: "Welcome to contact" })
            }
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
