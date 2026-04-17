import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-brand">Rubbo Queen</h3>
          <p className="footer-desc">
            Premium quality plywood supplier ensuring durability, strength, and elegance for all your construction and interior needs.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>R Q wood, Rubber Park<br/>Airapuram, Kerala, IN</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 97459 23632</span>
            </li>
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rubbo Queen Wood Products Pvt Ltd. All rights reserved.</p>
          <p className="designer">Designed by Subuhan</p>
        </div>
      </div>
    </footer>
  );
}
