import React from "react";

const SearchPageCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="video-card flex search-video-card">
      <img
        className="search-video-thunb"
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="search-card-right">
        <div>
          <h4 className="">{title}</h4>
          <p>{channelTitle}</p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchPageCard;
