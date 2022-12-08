import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav>
    //   <Link to="/">Home </Link> &nbsp;
    //   <Link to="/register">Register </Link> &nbsp;
    //   <Link to="/login">Login </Link> &nbsp;
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-danger">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">

        <ul className="navbar-nav mr-auto">

          <span className="navbar-text">

            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home </Link> &nbsp;
            <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>Profile </Link> &nbsp;

            

            <Link to="/register" style={{ color: "white", textDecoration: "none", marginLeft: "910px" }}>Register </Link> &nbsp;




            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login </Link> &nbsp;

          </span>




        </ul>

      </div>
    </nav>
  );
};

export default Header;
