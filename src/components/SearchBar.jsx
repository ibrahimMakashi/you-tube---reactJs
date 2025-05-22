import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchSuggetion, addToCache } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSuggetion, setIsSuggetion] = useState(false);

  const cache = useSelector((store) => store.search.searchCache);
  const searchSuggetion = useSelector((store) => store.search.searchSuggetion);

  const dispatch = useDispatch();

  const fetchSuggetion = async () => {
    const res = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`
    );
    const data = await res.json();
    dispatch(addToCache({ [query]: data[1] }));
    dispatch(addSearchSuggetion(data[1]));
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

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsSuggetion(true)}
        onBlur={() => setTimeout(() => {
          setIsSuggetion(false)
        }, 100)}
      />
      <img
        src="https://www.pngplay.com/wp-content/uploads/15/Magnifying-Glass-Icon-PNG-HD-Quality.png"
        alt=""
      />
      {query && (
        <div
          className="search-suggetion"
          style={{ display: isSuggetion ? "block" : "none" }}
        >
          {searchSuggetion &&
            searchSuggetion.map((search, i) => (
              <Link key={i} to={"/search/" + search}>
                <p className="curser" onClick={()=>setQuery(search)}>
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
  );
};

export default SearchBar;
