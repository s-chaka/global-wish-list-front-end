import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useLocation,
  Router,
  useOutletContext,
} from "react-router-dom";
import "./Home.css";
import "./SearchBar.css";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

const Home = () => {
  const { searchResults, setSearchResults } = useOutletContext();

  return (
    <>
      <SearchBar />
      <UsersList />
    </>
  );
};

export default Home;
