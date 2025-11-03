import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";

function App() {
      const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

      return (
            <Router>
                  <div className="App">
                        <AnnouncementBar
                              isVisible={isAnnouncementVisible}
                              onClose={() => setIsAnnouncementVisible(false)}
                        />
                        <Navbar isAnnouncementVisible={isAnnouncementVisible} />
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route
                                    path="/about"
                                    element={<h1>About Page</h1>}
                              />
                              <Route
                                    path="/menu"
                                    element={<h1>Menu Page</h1>}
                              />
                        </Routes>
                  </div>
            </Router>
      );
}

export default App;
