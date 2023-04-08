import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-individualSections">
        <h3>USEFUL LINKS</h3>
        <a href="">Blog</a>
        <a href="">Careers</a>
        <a href="">Site Map</a>
        <a href="">Corporate Information</a>
        <a href="">Whitehat</a>
      </div>
      <div className="Footer-individualSections">
        <h3>CUSTOMER POLICIES</h3>
        <a href="">Contact Us</a>
        <a href="">FAQ</a>
        <a href="">T&C</a>
        <a href="">Shipping</a>
        {/* <a href="">Track Orders</a> */}
        <a href="">Privacy policy</a>
      </div>
      <div className="Footer-individualSections">
        <h3>KEEP IN TOUCH</h3>
        <a href="">
          <AiFillFacebook />
          Facebook
        </a>
        <a href="">
          <FaWhatsappSquare />
          Whats App
        </a>
        <a href="">
          <AiOutlineTwitter />
          Twitter
        </a>
        <a href="">
          <AiFillYoutube />
          Youtube
        </a>
        <a href="">
          <AiFillInstagram />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
