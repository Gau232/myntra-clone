import "./ProductPage.css";

import NavBar from "../../NavBar/NavBar";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import MyContext from "../../../context/MyContext";

const ProductPage = () => {
  // const [myContextData, setMyContextData] = useState(MyContext);
  const myContextData = useContext(MyContext);
console.log(myContextData);

  let inputDataMen = require("../../../assets/inputData/mens_data.json");
  let inputDataWomen = require("../../../assets/inputData/womens_data.json");
  let inputDataChildren = require("../../../assets/inputData/children_data.json");
  let combinedData = [...inputDataMen, ...inputDataWomen, ...inputDataChildren];

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

  const params = useParams();
  // console.log(params);
  productDetails = combinedData.filter((item) => {
    return item.id === params.id;
  });
  // console.log(productDetails);

  // productDetails = prop ? productDetails : prop;

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  // selecting the sizes
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClickSizeSelection = (index, size) => {
    setSelectedItem(index);
    setSelectedSize(size);
  };
  // console.log(selectedSize);

  const handleAddToCart = () => {
    if (selectedSize === null) {
      alert("Please select a size");
    } else {
      let cartItem = myContextData.cartState.find(
        (item) => item.id === productDetails[0].id
      );
      if (cartItem) {
        console.log("found");
        // console.log(cartItem);
        if (cartItem.selected_size === selectedSize) {
          alert(`Product in size ${selectedSize} already exist in cart`);
        } else {
          addProductToCart();
        }
      } else {
        console.log("! found");
        addProductToCart();
      }
    }
  };

  function addProductToCart () {
    let currProductDetails = productDetails[0];
    currProductDetails.quantity = 1;
    currProductDetails.selected_size = selectedSize;
    // console.log(currProductDetails);
    // myContextData.cartState.push(currProductDetails);
    // myContextData.updateCartContext(currProductDetails);
    myContextData.setCartState([...myContextData.cartState, currProductDetails]);
    // console.log(myContextData);
  }
  console.log(myContextData);

  return (
    <>
      <ScrollToTopOnMount />
      <NavBar />
      <main id="productPage-main">
        <div id="productPage">
          <div className="productPage-imgsContainer">
            {productDetails[0].images.slice(0, 4).map((image) => {
              return (
                <img
                  draggable="false"
                  src={image}
                  className="productPage-images"
                />
              );
            })}
          </div>

          <div className="productPage-itemDetailsSection">
            <div class="productPage-titleSection">
              <h1 class="productPage-title">
                {productDetails[0].brand}
                <h1 class="productPage-name">{productDetails[0].title}</h1>
              </h1>
              <div class="productPage-rating">
                <div>
                  {productDetails[0].rating} ⭐{" "}
                  <span> | {productDetails[0].rating_count}k Ratings</span>
                </div>
              </div>
            </div>

            <div className="productPage-priceSection">
              <div className="productPage-allprice">
                <span className="productPage-ourPrice">
                  ₹{productDetails[0].discounted_price}
                </span>
                <span className="productPage-strikePrice">
                  MRP <span>₹{productDetails[0].strike_price}</span>
                </span>
                <span className="productPage-discount">
                  {productDetails[0].discount}
                </span>
              </div>
              <div className="productPage-taxInclusive">
                inclusive of all taxes
              </div>
            </div>

            <div className="productPage-sizeSection">
              <h1 className="productPage-sizeHeading">SELECT SIZE</h1>
              <div className="productPage-sizeContainer">
                {productDetails[0].size.map((size, index) => {
                  return (
                    <span
                      key={index}
                      className={
                        selectedItem === index
                          ? "productPage-sizes productPage-sizes-selected"
                          : "productPage-sizes"
                      }
                      onClick={() => handleClickSizeSelection(index, size)}
                    >
                      {size}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="productPage-buyWishButtonSection">
              <button
                className="productPage-buyButton"
                onClick={handleAddToCart}
              >
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
