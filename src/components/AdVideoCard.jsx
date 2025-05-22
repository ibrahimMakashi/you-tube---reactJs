import React from "react";

const AdVideoCard = ({ VideoCard, info }) => {
  return (
    <div className="ad-video-card flex">
      <VideoCard info={info} />
      <div className="flex ad-title">
        <p>ad</p>
        <p>more info</p>
      </div>
    </div>
  );
};

export default AdVideoCard;
