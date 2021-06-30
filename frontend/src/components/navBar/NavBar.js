import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  //style object
  const Logo = {
    fontSize: 60,
    paddingLeft: "20px"
  }

  const EventName = {
    padding: "10px"
  }

  const NavbarStyle = {
    backgroundColor: "#1a2132"
  }

  const Bar = {
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/svg/hamburger6.svg?color=#1a2132')"
  }

  return (
      <div>
        <nav className="navbar navbar-expand-lg" style={NavbarStyle}>
          <div className="d-flex flex-row">
            <h2 className={"text-white"} style={Logo}>ICAF</h2>
            <p className={"text-white"} style={EventName}>International Conference on Application Frameworks</p>
          </div>

          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={Bar}></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-white" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Workshops
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item" to="/createWorkshop">
                        Create WorkShop
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/approvedWorkshops">
                        View Approved Workshops
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Research
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <Link className="dropdown-item" to="/createResearch">
                        Create Research Paper
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/approvedResearch">
                        View Approved Research Papers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register To Conference
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default NavBar;
