import heroVideo from "../assets/videos/bgedit.mp4";
import sampleImage from "../assets/images/sample3.jpg";
import "../index.css";

const Home = () => {
      return (
            <main>
                  <section className="section hero">
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

                        <div className="hero-content">
                              <h1>Savor the classic filipino dishes!</h1>
                              <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sapiente impedit in dolore
                                    officia veritatis cumque iusto.
                              </p>
                              <a className="cta-button" href="/menu">
                                    View Menu
                              </a>
                        </div>
                  </section>

                  <section className="section why-section">
                        <div className="why-container">
                              <div className="why-content-wrapper">
                                    <div className="why-text">
                                          <h2>Why Kusina ni Kapetan?</h2>
                                          <p className="why-description">
                                                Food service is more than just
                                                preparing and serving meals-
                                                it's about creating memorable
                                                experiences for every
                                                customer...
                                          </p>
                                          <button className="why-button">
                                                hello
                                          </button>
                                    </div>
                                    <div className="why-image">
                                          <img
                                                src={sampleImage}
                                                alt="Kusina ni Kapetan Food"
                                          />
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="section best-seller">
                        <div className="best-seller-container">
                              <div className="best-seller-content">
                                    <h2>Why Kusina ni Kapetan?</h2>
                                    <p className="why-description">
                                          Food service is more than just
                                          preparing and serving meals- it's
                                          about creating memorable
                                          experiences...
                                    </p>
                              </div>
                        </div>
                  </section>
            </main>
      );
};

export default Home;
