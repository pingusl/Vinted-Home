import { useState } from "react";
import magnifyingGlass from "../../img/loupe.svg";
import axios from "axios";

const Filter = () => {
  const [searchInput, setSearchInput] = useState("Rechercher des articles");
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [sort, setSort] = useState("price-asc");
  const [skip, setSkip] = useState(null);
  const [limite, setLimite] = useState(10);
  const [data, setData] = useState("");
  const [showResult, setShowResult] = useState("");

  const handleSearch = async (event) => {
    //event.preventDefault();

    const response = await axios.get(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchInput}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}&skip=${skip}&limit=${limite}`
    );
    // console.log(response.data.offers);
    // console.log(response.data.offers.length);
    setData(response.data);
    console.log(data.offers);
    data.offers.map((offer, index) => {
      setShowResult(
        <div className="offer" key={index}>
          <div className="offer-details">
            <span className="offer-article-details">{offer.product_name}</span>
            <span className="article-price">{offer.product_price}&nbsp;€</span>
            <span className="article-size"></span>

            <span className="offer-like"></span>
          </div>
          {/* {console.log(offer)} */}
        </div>
      );
      return console.log(data.offers);
    });
  };

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
        <div className="search-range">{showResult}</div>
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
              id=""
              className="sort"
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <option value="price-asc" selected>
                min max
              </option>
              <option value="price-desc">max min</option>
            </select>
            <input type="range" name="" id="" />
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
