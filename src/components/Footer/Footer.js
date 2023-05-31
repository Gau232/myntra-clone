import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaWhatsappSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-individualSections">
          <h3>USEFUL LINKS</h3>
          <a>Blog</a>
          <a>Careers</a>
          <a>Site Map</a>
          <a>Corporate Information</a>
          <a>Whitehat</a>
        </div>
        <div className="footer-individualSections">
          <h3>CUSTOMER POLICIES</h3>
          <a>Contact Us</a>
          <a>FAQ</a>
          <a>T&C</a>
          <a>Shipping</a>
          {/* <a href="">Track Orders</a> */}
          <a>Privacy policy</a>
        </div>
        <div className="footer-individualSections">
          <h3>KEEP IN TOUCH</h3>
          <a>
            <AiFillFacebook />
            Facebook
          </a>
          <a>
            <FaWhatsappSquare />
            Whats App
          </a>
          <a>
            <AiOutlineTwitter />
            Twitter
          </a>
          <a>
            <AiFillYoutube />
            Youtube
          </a>
          <a>
            <AiFillInstagram />
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-developerInfoSection">
        <div className="footer-socialNetworks">
          <a href="https://www.linkedin.com/in/gautham-k232/" target="_blank">
            <AiOutlineLinkedin />
          </a>
          <a href="mailto:gautham232@gmail.com" target="_blank">
            <AiOutlineMail />
          </a>
          <a href="https://wa.me//9677449284" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
        <div className="footer-developer">
          <div>Copyright © 2023 Myntra clone,</div>
          <div>Created by GAUTHAM K</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
