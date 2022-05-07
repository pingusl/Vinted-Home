//import { props } from "react";
import { useState } from "react";
import axios from "axios";
const Search = (props) => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      // console.log(response.data.offers[0]._id);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  console.log(props.searchInput);
  return <p>{props.searchInput}</p>;
};
export default Search;
