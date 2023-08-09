import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLike, AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineFeedback,
} from "react-icons/md";
import { VscDeviceCameraVideo, VscPlayCircle } from "react-icons/vsc";
import { GoHistory } from "react-icons/go";
const SideContainer = () => {
  const isMenu = useSelector((store) => store.nav.isMenu);
  if (!isMenu) return null;
  return (
    <div className="col-span-1 p-3 shadow-lg w-52 cursor-pointer">
      <div>
        <ul>
          <Link to="/">
            <div className="flex gap-5 items-center h-10 bg-gray-300 rounded-lg">
              <AiFillHome className="text-xl ml-4" />
              <li className="text-md">Home</li>
            </div>
          </Link>
          <Link to={"/results?search_query=Shorts"}>
            <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
              <VscDeviceCameraVideo className="text-xl ml-4" />
              <li className="text-md">Shorts</li>
            </div>
          </Link>
          <Link to={"/results?search_query=Subscriptions"}>
            <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
              <MdOutlineSubscriptions className="text-xl ml-4" />
              <li className="text-md">Subscriptions</li>
            </div>
          </Link>

          <hr className="border-gray-400" />
        </ul>

        <ul>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-2 hover:bg-gray-200">
            <MdOutlineVideoLibrary className="text-xl ml-4" />
            <li className="text-md">Library</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
            <GoHistory className="text-xl ml-4" />
            <li className="text-md">History</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
            <VscPlayCircle className="text-xl ml-4" />
            <li className="text-md">Your videos</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
            <MdOutlineWatchLater className="text-xl ml-4" />
            <li className="text-md">Watch later</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1 hover:bg-gray-200">
            <AiOutlineLike className="text-xl ml-4" />
            <li className="text-md">Liked videos</li>
          </div>
          <hr className="border-gray-400" />
        </ul>

        <ul>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10 hover:bg-gray-200">
            <AiOutlineSetting className="text-xl ml-4" />
            <li className="text-md">Settings</li>
          </div>
          <div className="flex gap-5 mt-1 items-center rounded-lg h-10 hover:bg-gray-200">
            <BiHelpCircle className="text-xl ml-4" />
            <li className="text-md">Help</li>
          </div>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10 hover:bg-gray-200">
            <MdOutlineFeedback className="text-xl ml-4" />
            <li className="text-md">Feedback</li>
          </div>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10 hover:bg-gray-200">
            <RiArrowDownSLine className="text-xl ml-3" />
            <li className="text-md">Show More</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideContainer;
