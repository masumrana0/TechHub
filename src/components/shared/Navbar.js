import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();

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
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-2xl bg-white rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li>
                  <Link href={"/products/cpu"}>CPU/Processor</Link>
                </li>
                <li>
                  <Link href="/products/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href={"/products/ram"}>RAM</Link>
                </li>
                <li>
                  <Link href={"/products/storage"}>Storage Device</Link>
                </li>
                <li>
                  <Link href={"/products/graphicsCard"}>Graphics Card</Link>
                </li>
                <li>
                  <Link href={"/products/PowerSupply"}>PowerSupply</Link>
                </li>
                <li>
                  <Link href={"/products/casing"}>Casing</Link>
                </li>
                <li>
                  <Link href={"/products/monitor"}>Monitor</Link>
                </li>
                <li>
                  <Link href={"/products/others"}>Others</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/pc-builder"}>Pc-Builder</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          TechHub
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details className="">
              <summary>Categories</summary>
              <ul className="p-2 shadow-2xl bg-white">
                <li>
                  <Link href={"/products/cpu"}>CPU/Processor</Link>
                </li>
                <li>
                  <Link href="/products/motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href={"/products/ram"}>RAM</Link>
                </li>
                <li>
                  <Link href={"/products/storage"}>Storage Device</Link>
                </li>
                <li>
                  <Link href={"/products/graphicsCard"}>Graphics Card</Link>
                </li>
                <li>
                  <Link href={"/products/PowerSupply"}>PowerSupply</Link>
                </li>
                <li>
                  <Link href={"/products/casing"}>Casing</Link>
                </li>
                <li>
                  <Link href={"/products/monitor"}>Monitor</Link>
                </li>
                <li>
                  <Link href={"/products/others"}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/pc-builder">PC-Builder</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <Link onClick={() => signOut()} href="/login" className="btn">
            Logout
          </Link>
        ) : (
          <Link href="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
