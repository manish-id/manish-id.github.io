import { useState } from "react"
import "../assets/css/navbar.css";

function Navbar() {
    
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-section" style={{ fontFamily: "High Cruiser" }}>
            <h1>MANISH.</h1>
          </div>
          <div className="menu-section">
            <ul>
              <li name="avi">AVAILABLE ITEMS</li>
              <li name="coll">COLLECTIONS</li>
              <li name="search">
                <div className="search-btn">
                  <input type="text" placeholder="SEARCH..." />
                  <i className="ph ph-magnifying-glass"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="auth-section">
            <div className="login" name="login">
              LOGIN
            </div>

            <div className="sign-up" name="sign-up">
              SIGN UP
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
