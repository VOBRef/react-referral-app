import React from "react";
import logo from "../assets/img/logo.svg";
import Searchicon from "../assets/img/search-icon.png";
import Updownarrow from "../assets/img/up-dwn-arr.png";
// import Logout from "../assets/img/logout.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navimagesize = {
    width: "45%",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-3">
      <Link className="navbar-brand mx-5" to={`/${props.data.firstUrl}`}>
        <img src={logo} alt="Logo" style={navimagesize} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav m-lg-auto m-md-auto my-2 w-75">
          <li className="nav-item w-100 ml-lg-5 ml-md-5">
            <div className="search-dv text-dark">
              <form action="" id="search_form">
                <button type="submit">
                  <img src={Searchicon} alt="Search" />
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </form>
              <span className="ic-dv arrow-ic bg-white text-dark">
                <Link to="/admin">
                  <img src={Updownarrow} alt="Icon" />
                </Link>
              </span>
            </div>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto mb-2">
          <li className="nav-item mr-3">
            <Link className="nav-link" to={`/${props.data.firstUrl}`}>
              Home
            </Link>
          </li>
          <li className="nav-item mr-3">
            <Link className="nav-link" to={`/${props.data.secondUrl}`}>
              <span className={`history icon ${props.data.icon}`}>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
              </span>
              {props.data.text}
            </Link>
          </li>
          <li className="nav-item mr-3 mb-2">
            <Link to="/" className="nav-link">
              <span className="icon">
              <i className="fa fa-sign-out"></i>
                {/* <img src={Logout} alt="LogOut" /> */}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  firstUrl: "admin",
  secondUrl: "document",
  icon: "d-none",
  text: "Document",
};
