import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = (props) => {
  const data = props.data;
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  return (
    <div>
      <div className="search-page">
        <input
          type="text"
          placeholder="Search..."
          className="searchBar"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {/* {data
        .filter((user) => user.first_name.toLowerCase().includes(searchInput))
        .map((user) => (
          <li>{user.first_name}</li>
        ))} */}
      {/* <ul>
        <li>Selam </li>
        <li>Ashi </li>
        <li>Bob</li>
      </ul> */}
    </div>
  );
};

export default Home;
