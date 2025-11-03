// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/bgedit.mp4";
import sampleImage from "../assets/images/sample3.jpg";
import "../index.css";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";

const Home = () => {
      const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

      useEffect(() => {
            document.body.classList.remove("landing-page");
      }, []);

      return (
            <main>
                  {/* ✅ Announcement Bar with working close & transition */}
                  <AnnouncementBar
                        isVisible={isAnnouncementVisible}
                        onClose={() => setIsAnnouncementVisible(false)}
                  />

                  {/* ✅ Navbar adjusts position when announcement is hidden */}
                  <nav
                        className={`navbar ${
                              !isAnnouncementVisible
                                    ? "announcement-hidden"
                                    : ""
                        }`}
                  >
                        <div className="nav-container">
                              <div className="nav-left">
                                    <Link to="/">Home</Link>
                                    <Link to="/info">Info</Link>
                                    <Link to="/menu">Menu</Link>
                              </div>

                              <div className="nav-logo">
                                    <h1 className="logo-creative">
                                          Kusina ni Kape'Tan
                                    </h1>
                              </div>

                              <div className="nav-right">
                                    <Link to="/cart">Cart</Link>
                                    <Link to="/signup">Sign-Up</Link>
                              </div>
                        </div>
                  </nav>

                  {/* Hero Section */}
                  <section className="hero">
                        <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="hero-video"
                              aria-hidden="true"
                        >
                              <source src={heroVideo} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>

                        <div className="hero-overlay"></div>

                        <div className="hero-inner">
                              <div className="hero-text">
                                    <h1 className="hero-title">
                                          Welcome to{" "}
                                          <span className="accent">
                                                Kusina ni Kape'Tan
                                          </span>
                                    </h1>
                                    <p className="hero-tagline">
                                          Brewing warmth and flavor in every
                                          dish
                                    </p>
                                    <p className="hero-description">
                                          Discover comfort food crafted with
                                          passion — from authentic Filipino
                                          flavors to heartwarming fusion
                                          favorites. Come taste what home feels
                                          like.
                                    </p>
                                    <Link to="/menu" className="hero-button">
                                          View Menu{" "}
                                          <i className="bi bi-arrow-right"></i>
                                    </Link>
                              </div>
                        </div>
                  </section>

                  {/* Why Section */}
                  <section className="section why-section">
                        <div className="why-container">
                              <div className="why-content-wrapper">
                                    <div className="why-text">
                                          <h2>Why Kusina ni Kape'Tan?</h2>
                                          <p className="why-description">
                                                Food service is more than just
                                                preparing and serving meals.
                                                It's about creating memorable
                                                experiences for every customer.
                                                We combine quality ingredients,
                                                skilled preparation, and a
                                                welcoming atmosphere to ensure
                                                that every dish brings
                                                satisfaction and joy. A great
                                                food service focuses on
                                                freshness, flavor, and
                                                presentation to delight the
                                                senses.
                                          </p>
                                          <button className="why-button">
                                                Our story{" "}
                                                <i className="bi bi-arrow-right"></i>
                                          </button>
                                    </div>
                                    <div className="why-image">
                                          <img
                                                src={sampleImage}
                                                alt="Kusina ni Kape'Tan Food"
                                          />
                                    </div>
                              </div>
                        </div>
                  </section>
            </main>
      );
};

export default Home;
