import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";

const Navbar = () => {
  const { user, logOutUser, loading } = use(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("signed out succesfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {/* for applicant. check roles as well */}
      {user && (
        <>
          <li>
            <NavLink to="/myApplications">My Applications</NavLink>
          </li>
        </>
      )}

      {/* for recruiter. check role as well */}
      {user && (
        <>
          <li>
            <NavLink to="/addJob">Add job</NavLink>
          </li>

          <li>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogout} className="btn">
            LogOut
          </button>
        ) : loading ? (
          <div className="loading loading-md"></div>
        ) : (
          <>
            <NavLink className="btn" to="/signIn">
              Sign In
            </NavLink>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
