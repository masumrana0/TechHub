import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-400 shadow-2xl lg:px-48 ">
      <div className="navbar-start">
        <div className="dropdown bg-base-400">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Grapics Card</a>
                </li>
                <li>
                  <a>Casing</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Pc-Builder</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">TechHub</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <details className="">
              <summary>Categories</summary>
              <ul className="p-2 shadow-2xl bg-white">
                <li>
                  <a>CPU/Processor</a>
                </li>
                <li>
                  <a>Motherboard</a>
                </li>
                <li>
                  <a>RAM</a>
                </li>
                <li>
                  <a>Storage Device</a>
                </li>
                <li>
                  <a>Grapics Card</a>
                </li>
                <li>
                  <a>Casing</a>
                </li>
                <li>
                  <a>Monitor</a>
                </li>
                <li>
                  <a>Others</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>PC-Builder</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
