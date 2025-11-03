import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/LandingPage";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
      const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

      const PageWithLayout = ({ children }) => (
            <>
                  <AnnouncementBar
                        isVisible={isAnnouncementVisible}
                        onClose={() => setIsAnnouncementVisible(false)}
                  />
                  <Navbar isAnnouncementVisible={isAnnouncementVisible} />
                  {children}
            </>
      );

      return (
            <Router>
                  <div className="App">
                        <Routes>
                              {}
                              <Route path="/" element={<Landing />} />

                              {}
                              <Route
                                    path="/Home"
                                    element={
                                          <PageWithLayout>
                                                <Home />
                                          </PageWithLayout>
                                    }
                              />

                              {}
                              <Route
                                    path="/About"
                                    element={
                                          <PageWithLayout>
                                                <h1>About Page</h1>
                                                {/* You can replace this with <About /> component later */}
                                          </PageWithLayout>
                                    }
                              />

                              {}
                              <Route
                                    path="/Menu"
                                    element={
                                          <PageWithLayout>
                                                <h1>Menu Page</h1>
                                                {/* You can replace this with <Menu /> component later */}
                                          </PageWithLayout>
                                    }
                              />

                              {}
                              <Route
                                    path="*"
                                    element={
                                          <PageWithLayout>
                                                <div
                                                      style={{
                                                            padding: "2rem",
                                                            textAlign: "center",
                                                      }}
                                                >
                                                      <h1>
                                                            404 - Page Not Found
                                                      </h1>
                                                      <p>
                                                            The page you're
                                                            looking for doesn't
                                                            exist.
                                                      </p>
                                                </div>
                                          </PageWithLayout>
                                    }
                              />
                        </Routes>
                  </div>
            </Router>
      );
}

export default App;
