import React from "react";

import FeatherIcon from "feather-icons-react";

import "../assets/bootstrap-4.0.0/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/common.css";
import "../assets/css/sidebar.css";
import "../assets/css/main-navbar.css";
import "../assets/css/text.css";

import dash from "../assets/images/dash.png";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokenVerification");
    navigate("../login");
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light pt-0 pb-0 cstm-navbar-2 bg-white">
        <div className="logo">
          <a
            href="#"
            className="dash"
            data-toggle="modal"
            data-target="#dashModal"
          >
            <img src={dash} />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto h-60">
            <li className="nav-item dropdown main-navbar">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="user" className="mr-2">
                  <FeatherIcon icon="user" />
                </i>
                <span className="mr-1">Hello Admin</span>
                <div className="log_btn">
                  <button
                    className="btn btn-secondary red btn-block"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
