import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import "./LandingPage.css";

import slide1 from "../assets/images/imbutido.jpeg";
import slide2 from "../assets/images/longanisa.jpeg";
import slide3 from "../assets/images/pork.jpeg";
import slide4 from "../assets/images/tocino.jpeg";

const Landing = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
      const [imagesLoaded, setImagesLoaded] = useState(false);
      const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
      const navigate = useNavigate();

      const slides = useMemo(
            () => [
                  { image: slide1 },
                  { image: slide2 },
                  { image: slide3 },
                  { image: slide4 },
            ],
            []
      );

      const nextSlide = useCallback(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, [slides.length]);

      const prevSlide = useCallback(() => {
            setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length
            );
      }, [slides.length]);

      const goToSlide = (index) => {
            setCurrentSlide(index);
      };

      const goToHome = () => {
            navigate("/Home");
      };

      useEffect(() => {
            document.body.classList.add("landing-page");
            return () => {
                  document.body.classList.remove("landing-page");
            };
      }, []);

      useEffect(() => {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
      }, [nextSlide]);

      useEffect(() => {
            const handleKeyDown = (e) => {
                  if (e.key === "ArrowLeft") prevSlide();
                  if (e.key === "ArrowRight") nextSlide();
            };

            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
      }, [nextSlide, prevSlide]);

      useEffect(() => {
            const loadImages = async () => {
                  const imagePromises = slides.map((slide) => {
                        return new Promise((resolve, reject) => {
                              const img = new Image();
                              img.src = slide.image;
                              img.onload = resolve;
                              img.onerror = reject;
                        });
                  });

                  await Promise.all(imagePromises);
                  setImagesLoaded(true);
            };

            loadImages();
      }, [slides]);

      if (!imagesLoaded) {
            return (
                  <div className="landing loading">
                        <div className="logo">
                              <i className="bi bi-egg-fried"></i>
                        </div>
                        <p>Loading delicious flavors...</p>
                  </div>
            );
      }

      return (
            <div className="landing">
                  <AnnouncementBar
                        isVisible={isAnnouncementVisible}
                        onClose={() => setIsAnnouncementVisible(false)}
                  />
                  <Navbar isAnnouncementVisible={isAnnouncementVisible} />

                  <main
                        className="banner"
                        role="main"
                        aria-label="Filipino restaurant hero"
                  >
                        <div className="slides">
                              {slides.map((slide, index) => (
                                    <div
                                          key={index}
                                          className={`slide ${
                                                index === currentSlide
                                                      ? "active"
                                                      : ""
                                          }`}
                                          style={{
                                                backgroundImage: `url(${slide.image})`,
                                          }}
                                    />
                              ))}
                        </div>

                        <div className="container">
                              <div className="left">
                                    <h1>
                                          Kusina Ni
                                          <br />
                                          Kapetan
                                    </h1>
                                    <p className="lead">
                                          Experience authentic Filipino flavors
                                          in a warm, inviting atmosphere.
                                          Traditional recipes meet modern dining
                                          at Kusina ni Kapetan.
                                    </p>
                                    <button
                                          className="cta"
                                          onClick={goToHome}
                                          onKeyDown={(e) =>
                                                e.key === "Enter" && goToHome()
                                          }
                                    >
                                          Enter Restaurant
                                          <i className="bi bi-arrow-right"></i>
                                    </button>
                              </div>
                        </div>

                        <div className="overlay-controls">
                              <button
                                    onClick={prevSlide}
                                    aria-label="Previous image"
                              >
                                    <i className="bi bi-chevron-left"></i>
                              </button>
                              <button
                                    onClick={nextSlide}
                                    aria-label="Next image"
                              >
                                    <i className="bi bi-chevron-right"></i>
                              </button>
                        </div>

                        <div className="slide-indicators">
                              {slides.map((_, index) => (
                                    <button
                                          key={index}
                                          className={`indicator ${
                                                index === currentSlide
                                                      ? "active"
                                                      : ""
                                          }`}
                                          onClick={() => goToSlide(index)}
                                          aria-label={`Go to slide ${
                                                index + 1
                                          }`}
                                    />
                              ))}
                        </div>
                  </main>
            </div>
      );
};

export default Landing;
