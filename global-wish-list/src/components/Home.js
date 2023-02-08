import { useOutletContext } from "react-router-dom";
import "./Home.css";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

const Home = () => {
  const { searchResults, setSearchResults } = useOutletContext();

  return (
    <>
      <SearchBar />
      {searchResults && <UsersList />}
    </>
  );
};

export default Home;
