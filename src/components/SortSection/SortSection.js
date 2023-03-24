import "./SortSection.css";

const SortSection = () => {
  return (
    <div className="sortSection-sort-holder">
      Sort by:
      <select className="sortSection-dropdown">
        <option value="whatsNew">What's New</option>
        <option value="priceLowToCHigh">Price low to high</option>
        <option value="betterDiscount">Better Discount</option>
        <option value="finalPrice">Final Price</option>
      </select>
    </div>
  );
};

export default SortSection;
