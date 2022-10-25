import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/HomeAuth" style={{ textDecoration: "none", color: "white" }}>
            <b>All Data</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
        <li className="d-flex justify-content-around">
          <Link to="/food" style={{ textDecoration: "none", color: "white" }}>
            <b>Food </b>
          </Link>
          <Link to="/medications" style={{ textDecoration: "none", color: "white" }}>
            <b>Medications </b>
          </Link>
          <Link to="/BP" style={{ textDecoration: "none", color: "white" }}>
            <b>Blood Pressure </b>
          </Link>
          <Link to="/BS" style={{ textDecoration: "none", color: "white" }}>
            <b>Blood Sugar </b>
          </Link>
          <Link to="/HR" style={{ textDecoration: "none", color: "white" }}>
            <b>Heart Rate </b>
          </Link>
          <Link to="/weight" style={{ textDecoration: "none", color: "white" }}>
            <b>Weight </b>
          </Link>
        </li>
      <ul>
    
      </ul>
    </div>
  );
};

export default Navbar;
