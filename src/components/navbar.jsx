import { useState } from "react";
import "../assets/css/navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-section" style={{ fontFamily: "High Cruiser" }}>
            <h1>MANISH.</h1>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className="desktop-menu">
            <ul>
              <li>AVAILABLE ITEMS</li>
              <li>COLLECTIONS</li>
              <li>
                <div className="search-btn">
                  <input type="text" placeholder="SEARCH..." />
                  <i className="ph ph-magnifying-glass"></i>
                </div>
              </li>
            </ul>
          </div>

          <div className="auth-section desktop-auth">
            <div className="login">LOGIN</div>
            <div className="sign-up">SIGN UP</div>
          </div>
        </div>

        {/* Mobile Menu - di luar container */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li>AVAILABLE ITEMS</li>
              <li>COLLECTIONS</li>
              <li>
                <div className="search-btn">
                  <input type="text" placeholder="SEARCH..." />
                  <i className="ph ph-magnifying-glass"></i>
                </div>
              </li>
            </ul>
            <div className="auth-section mobile-auth">
              <div className="login">LOGIN</div>
              <div className="sign-up">SIGN UP</div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
