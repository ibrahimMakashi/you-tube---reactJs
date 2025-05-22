import React from "react";
import { formatNumberUS } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title } = snippet;


  return (
    <div className="video-card">
      <img src={thumbnails?.medium?.url} alt="" />
      <div className="flex video-card-bottom">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />

        <div>
          <h4>{title}</h4>
          <p>{channelTitle}</p>
          <p>{formatNumberUS(statistics?.viewCount)} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
