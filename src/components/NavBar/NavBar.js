import "./NavBar.css";
import logo from "../../assets/images/Myntra_Logo_nobg.png";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="navBar-nav-container">
        <div className="navBar-logo-holder">
          <a href="/">
            <img className="navBar-logo" src={logo} alt="myntra logo" />
          </a>
        </div>
        <div className="navBar-middleSection">
          <div className="navBar-nav-category">
            <span>MEN</span>
            <span>WOMEN</span>
            <span>KIDS</span>
          </div>
          <div>
            <input
              className="navBar-search"
              type="text"
              placeholder="Search your product here"
            />
          </div>
          <div className="navBar-cart-holder">
            <FaShoppingCart />
            <div className="navBar-cart-list-length">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
