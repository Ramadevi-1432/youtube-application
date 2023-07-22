import React from "react";
import Button from "./Button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Editing",
    "Shopping",
    "Live",
    "Smartphones",
    "News",
    "Sales",
    "Tourism",
    "Dhee",
    "Cricket",
    "Education",
    "Love",
    "Drama",
    "Technology",
    "Sports",
    "Movies",
    "Programming",
    "Comedy",
    "Thriller",
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
          <Button name={btn} key={index} />
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
