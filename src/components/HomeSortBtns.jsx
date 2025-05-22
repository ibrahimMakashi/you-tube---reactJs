import React, { useRef } from "react";
import HomeBtn from "./HomeBtn";
import { useSelector } from "react-redux";

const HomeSortBtns = () => {
  const isMenu = useSelector((store) => store.header.isMenu);

  const reference = useRef()

  const list = [
    "All",
    "Live",
    "Music",
    "Trailers",
    "Web development",
    "Ai",
    "Data structures",
    "comedy",
    "Popular",
    "Movies",
    "All",
    "Live",
    "Music",
    "Trailers",
    "Web development",
    "Ai",
    "Data structures",
    "comedy",
    "Popular",
    "Movies",
  ];

  const handleSlide = (direction) =>{
    const slide = 300
    reference.current.scrollBy({
      left: direction==='left' ? -slide : slide,
      behavior: 'smooth'
    })
  }
  return (
    <div className="sort-btn-container">
      <button  className="sort-left-btn" onClick={()=> handleSlide('left')}>←</button>
      <div className="sort-btn-slider flex" ref={reference}>
        {list.map((item, index) => (
          <HomeBtn key={index} name={item} />
        ))}
      </div>
      <button onClick={()=> handleSlide('right')} style={{right: isMenu ? '200px' : '70px'}} className="sort-right-btn">→</button>
    </div>
  );
};

export default HomeSortBtns;
