import "./Card2.css";

const Card = () => {
  return (
    <div className="card-cardHolder">
      <img
        className="card-image"
        src="https://image.made-in-china.com/44f3j00IMoiWqclbVbT/Free-Sample-Men-Solid-Color-Summer-Round-Neck-Custom-T-Shirt-High-Quality-Short-Sleeves-Drop-Shipping.jpg"
      />
      <div className="card-details">
        <h4 className="card-itemName">Dennis Lingo</h4>
        <h4 className="card-itemDesc">Men Casual T Shirt</h4>
        <h4 className="card-itemPriceSec">
          Rs.554<span className="card-itemStrikePrice">Rs.1849</span>
          <span className="card-itemDiscount">70% OFF</span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
