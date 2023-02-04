import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Router } from "react-router-dom";
import "./Home.css";
import UsersTable from "./UsersTable";
import { Link } from "react-router-dom";

const Home = (props) => {
  const data = props.data;
  // console.log("data from home page", data);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  const navigate = useNavigate();
  // const keys = ["firstName", "lastName", "email", data.address["country"]];

  const search = (data) => {
    // return data.filter(
    //   (user) =>
    //     // keys.some((key) => user[key].toLowerCase().includes(searchInput))
    //     user.firstName.toLowerCase().includes(searchInput) ||
    //     user.lastName.toLowerCase().includes(searchInput) ||
    //     user.email.toLowerCase().includes(searchInput) ||
    //     user.address.country.toLowerCase().includes(searchInput) ||
    //     user.address.city.toLowerCase().includes(searchInput)
    // );
  };
  const handleClick = () => {
    // console.log(searchInput);
    navigate("/wishes");

    // let search_found = false;
    // for (let user of data) {
    //   if (
    //     searchInput.toLowerCase === user.firstName.toLowerCase() ||
    //     searchInput === user.lastName.toLowerCase() ||
    //     searchInput === user.address.country.toLowerCase() ||
    //     searchInput === user.address.city.toLowerCase() ||
    //     searchInput === user.address.state.toLowerCase()
    //   ) {
    //     search_found = true;
    //     // props.onSetCurrentUser(user);
    //     navigate("/wishes");
    //     break;
    //   }
    // }
    // if (!search_found) {
    //   navigate("/signup");
    // }
    // return searchInput;
  };
  return (
    <div>
      <div className="search-page">
        {/* <div className="dropdown-row"> */}
        <input
          type="text"
          placeholder="Search..."
          className="searchBar"
          // className="dropdown-row"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <br />
        {/* {searchInput && <UsersTable data={search(data)} />} */}

        <div>
          {data
            .filter(
              (user) =>
                user.firstName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                user.lastName
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.address.country
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                user.address.state
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()) ||
                user.address.city
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
            )
            .splice(0, 5)
            .map((user) => (
              <div key={user.id} className="search-result">
                <span> {user.firstName} </span>
                <span>{user.lastName} </span>
                <span>{user.email} </span>
                <span>{user.address.country} </span>
                <span>{user.address.city} </span>
                <span>{user.address.state} </span>
                <button onClick={handleClick}> view wish</button>
              </div>
            ))}
          <div></div>
        </div>

        <div></div>
      </div>
    </div>

    // </div>
  );
};

export default Home;
