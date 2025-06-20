import React from 'react'
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="logo">MANISH</div>
      <div className="sign-up-btn">
        <a href="">SIGN UP</a>
      </div>
      <div className="footer-columns-container">
        <div className="col">
          <p>Shop</p>
          <div className="menu-lists">
            <ul>
              <li>Hot Items</li>
              <li>Available Items</li>
              <li>Collections</li>
              <li>Local Store</li>
            </ul>
          </div>
        </div>

        <div className="col">
          <p>About Manish</p>
          <div className="menu-lists">
            <ul>
              <li>Our Story</li>
              <li>Article</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="col">
          <p>Payment</p>
          <div className="menu-lists">
            <ul>
              <li>DANA</li>
              <li>Shopee Pay</li>
            </ul>
          </div>
        </div>

        <div className="col">
          <p>Help</p>
          <div className="menu-lists">
            <ul>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
