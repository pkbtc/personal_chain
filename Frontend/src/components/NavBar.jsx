import React from "react"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-evenly">
      <div>
        ParaBTC
      </div>
      <div>
        <ul className="flex">
          <li>
            <NavLink to="/add-data">Add Data</NavLink>
          </li>
          <li>
            <NavLink to="/join-peer">Join Peer</NavLink>
          </li>
          <li>
            <NavLink to="/avg-mine">Avg Mine Rate</NavLink>
          </li>
        </ul>
      </div>
      <div className="">
        <NavLink to="/sign-in">Login</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
