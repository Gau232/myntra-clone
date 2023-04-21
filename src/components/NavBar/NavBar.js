import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Myntra_Logo_nobg.png";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";

const NavBar = () => {

  const cat = "women";
  return (
    <>
      <div className="navBar-backSpace"></div>
      <div className="navBar-container">
        <div className="navBar-leftSection">
          <div className="navBar-logoHolder">
            <Link to={"/"}>
              <img className="navBar-logo" src={logo} alt="myntra logo" />
            </Link>
          </div>
          <div className="navBar-categorySection">
            <Link to={"/Catalog/men"} className="navBar-cat">
              MEN
            </Link>
            <Link to={"/Catalog/women"} className="navBar-cat">
              WOMEN
            </Link>
            <Link to={"/Catalog/kids"} className="navBar-cat">
              KIDS
            </Link>
            <span className="navBar-cat">HOME & LIVING</span>
            <span className="navBar-cat">BEAUTY</span>
            <span className="navBar-cat navBar-catStudio">
              STUDIO <div className="navBar-catNew">NEW</div>
            </span>
          </div>
        </div>
        <div className="navBar-rightSection">
          <div className="NavBar-searchBar">
            <HiOutlineSearch className="navBar-searchIcon" />
            <input
              className="navBar-search"
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
          <a className="navBar-iconContainer">
            <HiOutlineUser className="navBar-icon" />
            <div>Profile</div>
          </a>
          <a className="navBar-iconContainer">
            <HiOutlineHeart className="navBar-icon" />
            <div>Wishlist</div>
          </a>
          <a href="/cart" className="navBar-iconContainer navBar-cartIcon">
            <HiOutlineShoppingBag className="navBar-icon" />
            <span className="navBar-cart-list-length">0</span>
            <div>Bag</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
