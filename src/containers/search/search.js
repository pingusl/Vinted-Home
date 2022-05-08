import { useState } from "react";
import axios from "axios";
const Search = (props) => {
  const tab = [];
  const [result, setResult] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      const data = response.data.offers;

      for (let i = 0; i < data.length; i++) {
        if (data[i].product_description.indexOf(props.searchInput) !== -1) {
          if (tab.length < 7) {
            tab.push(<p key={data[i]._id}>{data[i].product_name}</p>);
          }
        }
      }

      setResult(
        tab.map((item) => {
          return <p>{item.props.children}</p>;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (props.searchInput.length > 3) {
    fetchData();
  }
  return (
    <>
      <div>{result}</div>
    </>
  );
};
export default Search;
