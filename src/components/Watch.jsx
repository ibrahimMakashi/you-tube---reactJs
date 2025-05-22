import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../utils/constents";
import { commentsArray, formatNumberUS } from "../utils/helper";
import RelatedVideoCard from "./RelatedVideoCard";
import RelatedMoviesShimmer from "./RelatedMoviesShimmer";
import WatchLeftShimmer from "./WatchLeftShimmer";

const Watch = () => {
  const [videoData, setVideoData] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [isDesc, setDesc] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isrelatedLoading, setRelatedLoading] = useState(false);
  const [isComment, setIsCommnt] = useState(true);

  const isMenu = useSelector((store) => store.header.isMenu);

  const { videoId } = useParams();

  const { snippet, statistics } = videoData;

  const toggleIsDesc = () => {
    setDesc(!isDesc);
  };

  const videoById = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=` +
          API_KEY
      );
      const data = await res.json();
      setVideoData(data?.items[0]);
    } catch (err) {
      console.error("Error fetching video data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    setRelatedVideos([]);
    setRelatedLoading(true);
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${snippet?.title}&key=${API_KEY}`
      );
      const data = await res.json();
      setRelatedVideos(data?.items);
    } catch (error) {
      console.error("Related videos error:", error);
    } finally {
      setRelatedLoading(false);
    }
  };

  useEffect(() => {
    videoById();
    window.scrollTo(0, 0);
  }, [videoId]);

  useEffect(() => {
    if (videoData?.snippet?.title) {
      fetchRelatedVideos();
    }
  }, [videoData]);

  const Comment = ({ user }) => {
    return (
      <div className="comment flex">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user"
        />
        <div>
          <p>Name : {user.name}</p>
          <p>comment : {user.comment}</p>
        </div>
      </div>
    );
  };

  const CommentContainer = ({ data }) => {
    return (
      <div className="comment-container">
        {data.map((user) => (
          <>
            <Comment user={user} />
            <div className="rep">
              <CommentContainer data={user.replies} />
            </div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div
      className="watch-container flex"
      style={{ marginLeft: isMenu ? "200px" : "70px" }}
    >
      <div className="watch-left-container">
        {!isLoading ? (
          <div className="watch-left flex">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h2 className="video-title">{snippet?.title}</h2>
            <div className="flex channel">
              <div className="flex curser">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  alt=""
                />
                <h4>{snippet?.channelTitle}</h4>
              </div>
              <div className="subscrib flex curser">
                <img
                  src="https://p7.hiclipart.com/preview/695/159/582/computer-icons-button-clip-art-alarm-bell.jpg"
                  alt=""
                />
                <p>Subscrib</p>
              </div>
              <div className="like flex curser">
                <img
                  src="https://static-00.iconduck.com/assets.00/like-icon-2048x1982-ihumn0em.png"
                  alt=""
                />
                <p>{formatNumberUS(statistics?.likeCount)}</p>
              </div>
              <div className="share flex curser">
                <img
                  src="https://i.pinimg.com/736x/9d/7d/7c/9d7d7c20cd2f6b573c90f2fb88da424a.jpg"
                  alt=""
                />
                <p>Share</p>
              </div>
            </div>
            <div className="discription">
              <div
                onClick={toggleIsDesc}
                className="description-top flex curser"
              >
                <p>Description</p>
                <p>{isDesc ? "Close" : "Open"}</p>
              </div>
              {isDesc && (
                <p className="discription-content">{snippet?.description}</p>
              )}
              {isDesc && (
                <p className="curser" onClick={() => setDesc(false)}>
                  <b>close</b>
                </p>
              )}
            </div>
            <div className="comments-section curser">
              <p onClick={() => setIsCommnt(!isComment)}>
                Comments : {isComment ? "Close" : "Open"}{" "}
              </p>
              {isComment && <CommentContainer data={commentsArray} />}
              {isComment && (
                <p onClick={() => setIsCommnt(false)}>
                  {isComment ? "Close" : "Open"}
                </p>
              )}
            </div>
          </div>
        ) : (
          <WatchLeftShimmer />
        )}
      </div>
      <div className="watch-right">
        {!isrelatedLoading ? (
          relatedVideos.map((item) => (
            <Link to={"/watch/" + item.id.videoId} key={item.id.videoId}>
              <RelatedVideoCard data={item} />
            </Link>
          ))
        ) : (
          <RelatedMoviesShimmer />
        )}
      </div>
    </div>
  );
};

export default Watch;
