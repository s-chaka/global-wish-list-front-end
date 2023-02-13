import { useOutletContext } from "react-router-dom";
import "./Home.css";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const { userData, setSearchResults } = useOutletContext();

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(null);

    const resultsArray = userData.filter(
      (data) =>
        data.firstName.toLowerCase().includes(e.target.value) ||
        data.lastName.toLowerCase().includes(e.target.value) ||
        data.email.toLowerCase().includes(e.target.value) ||
        data.address.country.toLowerCase().includes(e.target.value) ||
        data.address.city.toLowerCase().includes(e.target.value) ||
        data.address.state.toLowerCase().includes(e.target.value) ||
        data.address.zipCode.toLowerCase().includes(e.target.value)
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
