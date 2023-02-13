import "./Home.css";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <UsersList />
      <div className="container">
        <div className="bg-image"></div>
      </div>
    </div>
  );
};

export default Home;
