import axios from "axios";
const Search = (props) => {
  const tab = [];
  let char = "";
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
      console.log(tab);
      tab.map((item) => {
        //   console.log(item.key);
        //   return <p>{item.props.children}</p>;
        char = <p>item.props.children</p>;
      });
      console.log(`line 25: ${char}`);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();

  console.log({ tab });

  return <>{props.searchInput}</>;
};
export default Search;
