import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchSuggetion, addToCache } from "../utils/searchSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSuggetion, setIsSuggetion] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const cache = useSelector((store) => store.search.searchCache);
  const searchSuggetion = useSelector((store) => store.search.searchSuggetion);

  const dispatch = useDispatch();

  const fetchSuggetion = async () => {
    try {
      const res = await fetch(
        `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
      );
      const data = await res.json();
      dispatch(addToCache({ [query]: data[1] }));
      dispatch(addSearchSuggetion(data[1]));
      setError('')
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (cache[query]) {
        dispatch(addSearchSuggetion(cache[query]));
      } else {
        fetchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [query]);

  useEffect(() => {
    if (location.pathname === "/") {
      setQuery("");
    }
  }, [location.pathname]);

  const handleQuery = () => {
    navigate("/search/" + query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsSuggetion(true)}
        onBlur={() =>
          setTimeout(() => {
            setIsSuggetion(false);
          }, 100)
        }
      />
      <img
        onClick={() => handleQuery()}
        src="https://www.pngplay.com/wp-content/uploads/15/Magnifying-Glass-Icon-PNG-HD-Quality.png"
        alt="search"
      />
      {query && (
        <div
          className="search-suggetion"
          style={{ display: isSuggetion ? "block" : "none" }}
        >
          {error ? (
            <div>Please use CORS crome extention for suggetion</div>
          ) : (
            <div>
              {searchSuggetion &&
                searchSuggetion.map((search, i) => (
                  <Link key={i} to={"/search/" + search}>
                    <p className="curser" onClick={() => setQuery(search)}>
                      <img
                        src="https://www.pngplay.com/wp-content/uploads/15/Magnifying-Glass-Icon-PNG-HD-Quality.png"
                        alt=""
                      />
                      {search}
                    </p>
                  </Link>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
