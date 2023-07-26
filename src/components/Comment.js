import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Comment = ({ author, image, text, replies, id, visible, setVisible }) => {
  return (
    <div>
      <div className="flex items-center">
        <img className="rounded-full h-10 w-10 " src={image} alt={author} />
        <div className="flex flex-col px-4">
          <div>
            <span className="font-semibold">{author}</span>
            <span className="text-gray-400 ml-2">2 days ago</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className="flex mt-2 ml-14 items-center">
        <BiLike size={20} />
        <span className="ml-2 mr-2">20</span>
        <BiDislike size={20} />
        <span className="ml-4">Reply</span>
      </div>
      {replies && (
        <div
          className="flex mt-2 items-center ml-14 cursor-pointer"
          onClick={
            id !== visible ? () => setVisible(id) : () => setVisible(null)
          }
        >
          {id === visible ? (
            <IoIosArrowUp className="text-blue-700 font-bold mt-1 mr-2" />
          ) : (
            <IoIosArrowDown className="text-blue-700 font-bold mt-1 mr-2" />
          )}
          <span className="text-blue-600 font-bold "> {replies} Reply</span>
        </div>
      )}
    </div>
  );
};

export default Comment;
