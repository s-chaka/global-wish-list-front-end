import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Router } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./Home.css";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const { userData, setSearchResults, searchResults } = useOutletContext();
  // const [searchResults, setSearchResults] = useState("");

  // return (
  //   <div>
  //     <div className="search-page">
  //       <input
  //         type="text"
  //         placeholder="Search..."
  //         className="searchBar"
  //         onChange={(e) => setSearchResults(e.target.value)}
  //       />
  //       <br />
  //       <div>
  //         {userData
  //           .filter(
  //             (user) =>
  //               user.firstName
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase()) ||
  //               user.lastName
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase()) ||
  //               user.email
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase()) ||
  //               user.address.country
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase()) ||
  //               user.address.state
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase()) ||
  //               user.address.city
  //                 .toLowerCase()
  //                 .includes(searchResults.toLowerCase())
  //           )
  //           .splice(0, 10)
  //           .map((user) => (
  //             <div key={user.id} className="search-result">
  //               <span> {user.firstName} </span>
  //               <span>{user.lastName} </span>
  //               <span>{user.email} </span>
  //               <span>{user.address.country} </span>
  //               <span>{user.address.city} </span>
  //               <span>{user.address.state} </span>
  //               <button onClick={handleClick}> view wish</button>
  //             </div>
  //           ))}
  //         <div></div>
  //       </div>

  //       <div></div>
  //     </div>
  //   </div>

  //   // </div>
  // );
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(userData);

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
    console.log(resultsArray);
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
