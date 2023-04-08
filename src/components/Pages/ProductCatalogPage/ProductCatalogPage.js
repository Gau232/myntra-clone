import "./ProductCatalogPage.css";

import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const ProductCatalogPage = () => {
  return (
    <>
      <NavBar />
      <div id="catalog-container">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={"/catalog"}>Catalog</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Men
            </li>
          </ol>
        </nav>

        <div id="catalog-SortSection">
          {/* Filter */}
          <div id="filterName">FILTERS</div>

          {/* sort dropdown */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by : <span id="btn-selectedOption">Recommended</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Recommended
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  What's New
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Popularity
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Better Discount
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Price: High to Low
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Price: Low to High
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Customer Rating
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="catalog-filterAndCards">
          <div id="catalog-filterSection">
            <div className="catalog-categoryBox">
              <h4 className="catalog-filterTitle">TITLE</h4>
              <div className="catalog-filterItems">
                <ul className="catalog-list-group">
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                </ul>
              </div>
            </div>
            <div className="catalog-categoryBox">
              <h4 className="catalog-filterTitle">TITLE</h4>
              <div className="catalog-filterItems">
                <ul className="catalog-list-group">
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                </ul>
              </div>
            </div>
            <div className="catalog-categoryBox">
              <h4 className="catalog-filterTitle">TITLE</h4>
              <div className="catalog-filterItems">
                <ul className="catalog-list-group">
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                  <li className="catalog-list-group-item">
                    <input
                      className="catalog-form-check-input"
                      type="checkbox"
                    />
                    First checkbox
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="catalog-cardSection">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
};

export default ProductCatalogPage;
