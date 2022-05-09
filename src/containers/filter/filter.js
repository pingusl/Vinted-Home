import { useState } from "react";
import magnifyingGlass from "../../img/loupe.svg";
const Filter = () => {
  const handleSearch = () => {
    //   console.log(searchInput);
    return <p>{searchInput}</p>;
  };
  const [searchInput, setSearchInput] = useState("Rechercher des articles");
  return (
    <span className="search">
      <form className="search-form" id="#search-bar">
        <div className="search-bar">
          <div className="search-img">
            <img className="search-img" src={magnifyingGlass} alt="search" />
          </div>
          <div className="search-input">
            <input
              className="search-input"
              type="text"
              onClick={(event) => {
                setSearchInput("");
              }}
              onChange={(event) => {
                setSearchInput(event.target.value);
                handleSearch();
              }}
              value={searchInput}
            />
          </div>
          <div className="search-clear">
            <button className="clear-bt" type="button">
              X
            </button>
          </div>
        </div>
        <div className="search-range">search-range</div>
        <div className="search-result">
          <div
            className={
              searchInput !== ""
                ? "search-result-componant show"
                : "search-result-componant hide"
            }
          ></div>
        </div>
      </form>
    </span>
  );
};
export default Filter;
