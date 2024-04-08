import { useOutletContext } from "react-router-dom";
import "./Home.css";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const { userData, setSearchResults } = useOutletContext();

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (!searchTerm) return setSearchResults(null);

    const resultsArray = userData.filter((data) => {
      const fullName = `${data.firstName} ${data.lastName}`.toLowerCase();
      const email = data.email.toLowerCase();
      const country = data.address.country.toLowerCase();
      const city = data.address.city.toLowerCase();
      const state = data.address.state.toLowerCase();
      const zipCode= data.address.zipCode.toLowerCase();

      const countryMappings = {
        usa: "united states",
        uk: "united kingdom"
      };

      const mappedCountry = countryMappings[searchTerm] || searchTerm;

      return (
        fullName.includes(searchTerm) ||
        email.includes(searchTerm) ||
        country.includes(mappedCountry) ||
        city.includes(searchTerm) ||
        state.includes(searchTerm) ||
        zipCode.includes(searchTerm)
      );
    }
    );

    setSearchResults(resultsArray);
  };
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
