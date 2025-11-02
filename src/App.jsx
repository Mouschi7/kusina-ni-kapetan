import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Menu from "./pages/Menu.jsx";
import Auth from "./pages/Auth.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import SiteMap from "./pages/SiteMap.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
      return (
            <Router>
                  <div className="App">
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<AboutUs />} />
                              <Route path="/menu" element={<Menu />} />
                              <Route path="/cart" element={<Cart />} />
                              <Route path="/auth" element={<Auth />} />
                              <Route
                                    path="/privacy-policy"
                                    element={<PrivacyPolicy />}
                              />
                              <Route path="/site-map" element={<SiteMap />} />
                              <Route
                                    path="/terms-of-use"
                                    element={<TermsOfUse />}
                              />
                              <Route
                                    path="/landing"
                                    element={<LandingPage />}
                              />
                        </Routes>
                  </div>
            </Router>
      );
}

export default App;
