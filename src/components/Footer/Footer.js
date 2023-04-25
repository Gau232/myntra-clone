import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineLinkedin
} from "react-icons/ai";
import { FaWhatsappSquare, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="footer-individualSections">
        <h3>USEFUL LINKS</h3>
        <a href="">Blog</a>
        <a href="">Careers</a>
        <a href="">Site Map</a>
        <a href="">Corporate Information</a>
        <a href="">Whitehat</a>
      </div>
      <div className="footer-individualSections">
        <h3>CUSTOMER POLICIES</h3>
        <a href="">Contact Us</a>
        <a href="">FAQ</a>
        <a href="">T&C</a>
        <a href="">Shipping</a>
        {/* <a href="">Track Orders</a> */}
        <a href="">Privacy policy</a>
      </div>
      <div className="footer-individualSections">
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
      <div className="footer-developerInfoSection">
<div className="footer-socialNetworks">
<a href="https://www.linkedin.com/in/gautham-k232/" target="_blank">
          <AiOutlineLinkedin />
        </a>
        <a href="mailto:gautham232@gmail.com" target="_blank">
          <AiOutlineMail />
        </a>
        <a href="https://wa.me//9677449284" target="_blank">
          <FaWhatsapp/>
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
