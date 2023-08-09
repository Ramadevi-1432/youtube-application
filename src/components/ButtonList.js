import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Trending",
    "News",
    "Food",
    "Technology",
    "Live",
    "Motivation",
    "Music",
    "Comedy",
    "Movies",
    "Gadgets",
    "Games",
    "Drama",
    "Love",
    "Courses",
    "Education",
    "Fashion",
  ];
  const slideLeftBtn = () => {
    let slide = document.getElementById("slide");
    slide.scrollLeft -= 500;
  };
  const slideRightBtn = () => {
    let slide = document.getElementById("slide");
    slide.scrollLeft += 500;
  };
  return (
    <div className="grid grid-flow-col">
      <MdChevronLeft
        className="my-2 text-gray-400 cursor-pointer"
        size={30}
        onClick={slideLeftBtn}
      />

      <div className="flex overflow-hidden  scroll-smooth" id="slide">
        {buttonList.map((btn, index) => (
          <Link to={"/results?search_query=" + btn} key={index}>
            <Button name={btn} />
          </Link>
        ))}
      </div>
      <MdChevronRight
        className="my-2 text-gray-400 cursor-pointer"
        size={30}
        onClick={slideRightBtn}
      />
    </div>
  );
};

export default ButtonList;
