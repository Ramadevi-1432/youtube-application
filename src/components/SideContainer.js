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
            <div className="flex gap-5 items-center h-10 bg-gray-200 rounded-lg">
              <AiFillHome className="text-xl ml-4" />
              <li className="text-md">Home</li>
            </div>
          </Link>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <VscDeviceCameraVideo className="text-xl ml-4" />
            <li className="text-md">Shorts</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <MdOutlineSubscriptions className="text-xl ml-4" />
            <li className="text-md">Subscriptions</li>
          </div>
          <hr className="border-gray-400" />
        </ul>

        <ul>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-2">
            <MdOutlineVideoLibrary className="text-xl ml-4" />
            <li className="text-md">Library</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <GoHistory className="text-xl ml-4" />
            <li className="text-md">History</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <VscPlayCircle className="text-xl ml-4" />
            <li className="text-md">Your videos</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <MdOutlineWatchLater className="text-xl ml-4" />
            <li className="text-md">Watch later</li>
          </div>
          <div className="flex gap-5 items-center h-10 rounded-lg mt-1">
            <AiOutlineLike className="text-xl ml-4" />
            <li className="text-md">Liked videos</li>
          </div>
          <hr className="border-gray-400" />
        </ul>

        <ul>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10">
            <AiOutlineSetting className="text-xl ml-4" />
            <li className="text-md">Settings</li>
          </div>
          <div className="flex gap-5 mt-1 items-center rounded-lg h-10">
            <BiHelpCircle className="text-xl ml-4" />
            <li className="text-md">Help</li>
          </div>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10">
            <MdOutlineFeedback className="text-xl ml-4" />
            <li className="text-md">Help</li>
          </div>
          <div className="flex  gap-5 mt-1 items-center rounded-lg h-10">
            <RiArrowDownSLine className="text-xl ml-3" />
            <li className="text-md">Show More</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideContainer;
