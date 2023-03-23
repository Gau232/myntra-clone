import "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className="filter-holder">
      <div className="gender">
        <div>Gender:</div>
        <div className="buttons">
          <input id="men" type="radio" name="gender" checked />
          <label htmlFor="men">MEN</label>
          <input id="women" type="radio" name="gender" />
          <label htmlFor="women">WOMEN</label>
        </div>
      </div>

      <div className="categories">
        <div>Categories:</div>
        <div className="buttons">
          <input id="white" type="checkbox" name="category" />
          <label htmlFor="white">White</label>
          <input id="foldedSleeves" type="checkbox" name="category" />
          <label htmlFor="foldedSleeves">Folded Sleeves</label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
