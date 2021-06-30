import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROLES } from '../../constants/constants';
import { logout } from '../../actions/auth';
import { useToasts } from 'react-toast-notifications';

const NavBar = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const user = useSelector((state)=> state.auth.user);

  const onLogout = ()=> {
    dispatch(logout())
    addToast('Logged Out  Successfully', { appearance: 'success', autoDismiss: true, });
  }

  //style object
  const Logo = {
    fontSize: 60,
    paddingLeft: "20px"
  }
  
  const EventName = {
    padding: "10px"
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="d-flex flex-row">
          <h2 className={"text-white bg-dark"} style={Logo}>ICAF</h2>
          <p className={"text-white bg-dark"} style={EventName}>International Conference on Application Frameworks</p>
        </div>
        
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Workshops
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    { user?.role !== ROLES.USER.ATTENDEE && user?.role !== ROLES.USER.RESEARCHER && user ? 
                    (
                        <Link className="dropdown-item" to="/createWorkshop">
                          Create WorkShop
                        </Link>
                    ) : ''}
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/approvedWorkshops">
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/call_for_workshops">
                      Call For Workshop
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Research
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                      <Link className="dropdown-item" to="/call_for_research_papers">
                        Call For Research Papers
                      </Link>
                  </li>
                  {user?.role !== ROLES.USER.ATTENDEE && user?.role !== ROLES.USER.WORKSHOP_PRESENTER && user ? 
                  (
                    <li>
                      <Link className="dropdown-item" to="/createResearch">
                        Create Research Paper
                      </Link>
                    </li>
                  ) : ''}
                  { user ? 
                  (
                    <li>
                      <Link className="dropdown-item" to="/approvedResearch">
                        Research Papers
                      </Link>
                  </li>
                  ): ''}
                </ul>
              </li>
              { user?.role === ROLES.ADMIN ? 
              (
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Admin Panel
                    </Link>
              </li>
              ): ''}
              { user?.role === ROLES.EDITOR ? 
              (
                <li className="nav-item">
                    <Link className="nav-link" to="/editor">
                      Add Post
                    </Link>
              </li>
              ): ''}
              { user?.role === ROLES.REVIEWER || user?.role === ROLES.ADMIN ? 
              (
                <>
                  <li className="nav-item">
                      <Link className="nav-link" to="/reviewResearch">
                        Review Research Papers
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/reviewWorkshop">
                        Review Workshops
                      </Link>
                  </li>
                </>
              ): ''}
              
              { !user ? 
              (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register To Conference
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                </>
              ): 
              (
                <li className="nav-item">
                  <Link className="nav-link" onClick={onLogout}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
