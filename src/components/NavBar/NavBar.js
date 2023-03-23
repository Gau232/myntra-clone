import "./NavBar.css";
import logo from "../../assets/images/Myntra_Logo_nobg.png";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="icon-holder">
          <a href="/">
            <img src={logo} alt="myntra logo" />
          </a>
        </div>
        <div className="middleSection">
          <div className="nav-category">
            <span>MEN</span>
            <span>WOMEN</span>
            <span>KID</span>
          </div>
          <div>
            <input type="text" placeholder="Search your product here" />
          </div>
          <div className="cart-icon">
            <FaShoppingCart />
            <div className="cart-count">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
