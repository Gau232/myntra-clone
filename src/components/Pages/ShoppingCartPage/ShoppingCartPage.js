import "./ShoppingCartPage.css";
import NavBar from "../../NavBar/NavBar";

const ShoppingCartPage = () => {
  return (
    <div id="ShoppingCartPage">
      {/* navbar */}
      <NavBar />
      <div id="ShoppingCartPage-nav">
        <div id="ShoppingCartPage-navMid">
          <span>
            <span className="ShoppingCartPage-navHighlight">BAG</span>{" "}
            ---------- ADDRESS ---------- PAYMENT
          </span>
        </div>
        <div id="ShoppingCartPage-navEnd">
          <div class="ShoppingCartPage-secureContainer">
            <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" />
            <div>100% SECURE</div>
          </div>
        </div>
      </div>

      {/* body content */}
      <div className="ShoppingCartPage-container">
        <div className="ShoppingCartPage-main">
          <div className="ShoppingCartPage-itemListSection">
            <table>
              <tr>
                <th>Image</th>
                <th colSpan={1}>Description</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
              <tr>
                <td colSpan={1}>
                  <img
                    className="ShoppingCartPage-tableImg"
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg"
                  />
                </td>
                <td colSpan={1} className="ShoppingCartPage-tableDesc">
                  <h3>Title</h3>
                  <h4>Description</h4>
                </td>
                <td colSpan={1}>
                  <div className="ShoppingCartPage-addBox">S</div>
                </td>
                <td>
                  <div>
                    <span className="ShoppingCartPage-addBox2">-</span>
                    <span className="ShoppingCartPage-addBox">1</span>
                    <span className="ShoppingCartPage-addBox2">+</span>
                  </div>
                </td>
                <td className="ShoppingCartPage-listPrice">₹ 765</td>
                <td>
                  <div className="ShoppingCartPage-addBoxDelete">X</div>
                </td>
              </tr>
            </table>
          </div>
          <div className="ShoppingCartPage-PriceSection">
            <div className="ShoppingCartPage-priceBaseContainer">
              <h2 className="ShoppingCartPage-priceheading">
                PRICE DETAILS
                <span> (2 Items)</span>
              </h2>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Total MRP</h3>
                <h3>₹ 6989</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Discount on MRP</h3>
                <h3>- ₹ 3316</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Convenience Fee</h3>
                <h3>FREE</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail ShoppingCartPage-totalAmount">
                <h3>Total Amount</h3>
                <h3>₹ 3673</h3>
              </div>
              <button className="ShoppingCartPage-buyButton">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
