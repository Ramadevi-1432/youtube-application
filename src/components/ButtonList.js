import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Games",
    "Music",
    "Live",
    "Comedy",
    "Movies",
    "Gadgets",
    "News",
    "Trending",
    "Drama",
    "Technology",
    "Motivation",
    "Love",
    "Courses",
    "Education",
    "Fashion",
    "Food",
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
