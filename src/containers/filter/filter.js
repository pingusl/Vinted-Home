import { useEffect, useState } from "react";
import magnifyingGlass from "../../img/loupe.svg";
import axios from "axios";

const Filter = ({
  searchInput,
  setSearchInput,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sort,
  setSort,
  dataFilter,
  setDataFilter,
  isLoading,
  setIsLoading,
}) => {
  const [skip, setSkip] = useState(null);
  const [limite, setLimite] = useState(10);
  useEffect(() => {
    const handleSearch = async (event) => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchInput}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}&skip=${skip}&limit=${limite}`
        );
        console.log(response.data);
        setDataFilter(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleSearch();
  }, [searchInput, priceMin, priceMax, sort, limite, skip]);
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
                // handleSearch();
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
        <div className="search-range"></div>
        <div className="search-result">
          <div
            className={
              searchInput !== ""
                ? "search-result-componant show"
                : "search-result-componant hide"
            }
          ></div>
          <div className="filter">
            <select
              name=""
              className="sort"
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <option value="price-asc" defaultValue>
                min max
              </option>
              <option value="price-desc">max min</option>
            </select>

            <input
              type="text"
              className="price"
              placeholder=" prix mini"
              onChange={(event) => {
                setPriceMin(event.target.value);
              }}
              value={priceMin}
            />
            <input
              type="text"
              className="price"
              placeholder=" prix maxi"
              onChange={(event) => {
                setPriceMax(event.target.value);
              }}
              value={priceMax}
            />
          </div>
        </div>
      </form>
    </span>
  );
};
export default Filter;
