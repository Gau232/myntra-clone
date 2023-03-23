import "./SortSection.css";

const SortSection = () => {
  return (
    <div className="sort-holder">
      Sort by:
      <select>
        <option value="whatsNew">What's New</option>
        <option value="priceLowToCHigh">Price low to high</option>
        <option value="betterDiscount">Better Discount</option>
        <option value="finalPrice">Final Price</option>
      </select>
    </div>
  );
};

export default SortSection;
