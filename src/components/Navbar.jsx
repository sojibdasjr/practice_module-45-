import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-200 p-5 text-xl font-bold ">
      <nav className="flex justify-between ">
        <h1>Logo</h1>
        <div className="flex gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/product"}>Products</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <NavLink to={"/cart"}>Cart</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
