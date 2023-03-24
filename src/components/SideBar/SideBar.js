import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar-filter-holder">
      <div className="sideBar-filter-container">
        <div className="sideBar-heading">Gender:</div>
        <div className="sideBar-button-holder">
          <div class="sideBar-filters">
            <input id="men" type="radio" name="gender" checked />
            <label htmlFor="men">MEN</label>
          </div>
          <div class="sideBar-filters">
            <input id="women" type="radio" name="gender" />
            <label htmlFor="women">WOMEN</label>
          </div>
        </div>
      </div>

      <div className="sideBar-filter-container">
        <div className="sideBar-heading">Categories:</div>
        <div className="sideBar-button-holder">
          <div class="sideBar-filters">
            <input id="white" type="checkbox" name="category" />
            <label htmlFor="white">White</label>
          </div>
          <div class="sideBar-filters">
            <input id="foldedSleeves" type="checkbox" name="category" />
            <label htmlFor="foldedSleeves">Folded Sleeves</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
