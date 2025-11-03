import { Link } from "react-router-dom";

const Navbar = ({ isAnnouncementVisible }) => {
      return (
            <header>
                  <nav
                        id="navbar"
                        className={`navbar ${
                              !isAnnouncementVisible
                                    ? "announcement-hidden"
                                    : ""
                        }`}
                  >
                        <div className="nav-container">
                              <div className="nav-left">
                                    <Link to="/">Home.</Link>
                                    <Link to="/about">
                                          Info.
                                          <i className="bi bi-caret-down-fill"></i>
                                    </Link>
                                    <Link to="/menu">
                                          Menu.
                                          <i className="bi bi-caret-down-fill"></i>
                                    </Link>
                              </div>

                              <div className="nav-logo">
                                    <Link to="/">
                                          <h1 className="logo-creative">
                                                Kusina ni Kape'Tan.
                                          </h1>
                                    </Link>
                              </div>

                              <div className="nav-right">
                                    <Link to="/cart" title="Cart">
                                          Cart.
                                          <i className="bi bi-bag-fill"></i>
                                    </Link>
                                    <Link to="/login" title="Account">
                                          Sign-Up.
                                          <i className="bi bi-person-circle"></i>
                                    </Link>
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Navbar;
