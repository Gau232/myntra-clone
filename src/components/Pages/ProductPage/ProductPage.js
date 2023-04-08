import "./ProductPage.css";

import NavBar from "../../NavBar/NavBar";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";

const ProductPage = (prop) => {
  let productDetails = {
    id: "M1",
    category: "Mens",
    brand: "HRX Hrithik Roshan",
    title: "Men Rapid Dry Running Joggers",
    discounted_price: 664,
    strike_price: 1899,
    discount: "(65% OFF)",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    ],
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 3.7,
    rating_count: 13.8,
  };

  productDetails = prop ? productDetails : prop;

  return (
    <>
      <NavBar />
      <main id="productPage-main">
        <div id="productPage">
          <div className="productPage-imgsContainer">
            <img
              draggable="false"
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
              className="productPage-images"
              alt="category"
            />
            <img
              draggable="false"
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
              className="productPage-images"
              alt="category"
            />
            <img
              draggable="false"
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
              className="productPage-images"
              alt="category"
            />
            <img
              draggable="false"
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
              className="productPage-images"
              alt="category"
            />

            {/* {productDetails.images.map((image) => {
              <img
                draggable="false"
                src={image}
                className="productPage-images"
              />;
            })} */}
          </div>

          <div className="productPage-itemDetailsSection">
            <div class="productPage-titleSection">
              <h1 class="productPage-title">
                {productDetails.brand}
                <h1 class="productPage-name">{productDetails.title}</h1>
              </h1>
              <div class="productPage-rating">
                <div>
                  {productDetails.rating} ⭐{" "}
                  <span> | {productDetails.rating_count}k Ratings</span>
                </div>
              </div>
            </div>

            <div className="productPage-priceSection">
              <div className="productPage-allprice">
                <span className="productPage-ourPrice">
                  ₹{productDetails.discounted_price}
                </span>
                <span className="productPage-strikePrice">
                  MRP <span>₹{productDetails.strike_price}</span>
                </span>
                <span className="productPage-discount">
                  {productDetails.discount}
                </span>
              </div>
              <div className="productPage-taxInclusive">
                inclusive of all taxes
              </div>
            </div>

            <div className="productPage-sizeSection">
              <h1 className="productPage-sizeHeading">SELECT SIZE</h1>
              <div className="productPage-sizeContainer">
                <span className="productPage-sizes">XS</span>
                <span className="productPage-sizes">S</span>
                <span className="productPage-sizes">M</span>
                <span className="productPage-sizes">L</span>
                <span className="productPage-sizes">XL</span>
                <span className="productPage-sizes">XXL</span>
              </div>
            </div>

            <div className="productPage-buyWishButtonSection">
              <button className="productPage-buyButton">
                <HiOutlineShoppingBag />
                ADD TO BAG
              </button>
              <button className="productPage-wishButton">
                <HiOutlineHeart />
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
