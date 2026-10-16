import {Link} from 'react-router-dom'
import logo from "../../assets/images/evangadi_logo_white.png";
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_brand">
          <Link to="/" className="footer_logo">
            <img src={logo} alt="" />
          </Link>
          <div className="social_links">
            <Link to="#">
              <FaFacebook size={20} />
            </Link>
            <Link to="#">
              <FaInstagram size={20} />
            </Link>
            <Link to="#">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        <div className="footer_links">
          <h4>Useful Link</h4>

          <div className="link_wrapper">
            <Link to="#">How it works</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>

        <div className="footer_contact">
          <h4>Contact info</h4>
          <div className="contact_wrapper">
            <p>Evangadi Networks</p>
            <p>support@evangadi.com</p>
            <p>+1-202-386-2702</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;