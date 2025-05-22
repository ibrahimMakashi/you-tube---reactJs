import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API } from "../utils/constents";
import VideoCard from "./VideoCard";
import HomeSortBtns from "./HomeSortBtns";
import { Link } from "react-router-dom";
import HomePageVideoShimmer from "./HomePageVideoShimmer";
import AdVideoCard from "./AdVideoCard";

const Body = () => {
  const [homeVideos, setHomeVideos] = useState([]);

  const isMenu = useSelector((store) => store.header.isMenu);

  const videosData = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();

    setHomeVideos(data?.items);
  };

  useEffect(() => {
    videosData();
  }, []);
  return (
    <div
      className="body-container"
      style={{ marginLeft: isMenu ? "200px" : "70px" }}
    >
      <HomeSortBtns />

      <div className="video-container">
        {homeVideos.length > 0 ? (
          <>
          <AdVideoCard VideoCard={VideoCard} info={homeVideos[0]}/>
            {homeVideos.map((video) => (
              <Link key={video.id} to={"/watch/" + video?.id}>
                <VideoCard info={video} />
              </Link>
            ))}
          </>
        ) : (
          <>
            {" "}
            <HomePageVideoShimmer />
            <HomePageVideoShimmer />
            <HomePageVideoShimmer />
            <HomePageVideoShimmer />
            <HomePageVideoShimmer />
            <HomePageVideoShimmer />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
