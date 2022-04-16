import React from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
const token = localStorage.getItem("jwtAuthToken");
function checkLogin() {
  if(!token) return false
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtAuthToken");
    return false;
  }
  return decodedToken.data;
}

export default function Navbar() {
  function logout() {
    localStorage.removeItem("jwtAuthToken");
    window.location.reload();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">
          Accounting Services
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {!checkLogin() ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    {checkLogin().username}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
