import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../utils/constents";
import SearchPageCard from "./SearchPageCard";
import { useSelector } from "react-redux";
import SearchPageShimme from "./SearchPageShimme";

const SearchPage = () => {
  const [searchData, setSearchData] = useState([]);

  const isMenu = useSelector((store) => store.header.isMenu);

  const { query } = useParams();

  const fetchSearch = async () => {
    setSearchData([])
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`
    );
    const data = await res.json();
    setSearchData(data?.items);
    console.log(data?.items);
  };

  useEffect(() => {
    fetchSearch();
  }, [query]);

  return (
    <div
      className="search-page-container flex"
      style={{ marginLeft: isMenu ? "200px" : "70px" }}
    >
      {searchData.length > 0 ? (
        searchData.map((item, i) => (
          <Link key={i} to={"/watch/" + item?.id?.videoId}>
            <SearchPageCard info={item} />
          </Link>
        ))
      ) : (
        <SearchPageShimme />
      )}
    </div>
  );
};

export default SearchPage;
