import React, { useEffect, useState } from "react";
import { VIDEO_INFO_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { viewCount } from "../utils/views";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiShareFatLight } from "react-icons/pi";

const VideoInfo = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const likesCount = videoInfo?.statistics?.likeCount;
  const viewsCount = videoInfo?.statistics?.viewCount;
  const description = videoInfo?.snippet?.localized?.description || "";

  useEffect(() => {
    getVideoInfo();

    // eslint-disable-next-line
  }, [videoId]);
  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_API + videoId);
    const json = await data.json();
    // console.log(json);
    setVideoInfo(json?.items[0]);
  };
  return (
    <div>
      <h1 className="font-bold text-xl mb-3">{videoInfo?.snippet?.title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaCircleUser className="h-9 w-9" />
          <div className="flex flex-col ml-4">
            <h1 className="font-bold">{videoInfo?.snippet?.channelTitle}</h1>
            <p className="text-gray-800 text-sm">2.6M Subscribers</p>
          </div>
          <button className="bg-black rounded-full text-white px-4 py-2 ml-6">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="bg-gray-100 rounded-l-full  hover:bg-gray-300 px-4 py-2">
              <button className="flex">
                <AiOutlineLike className="text-2xl mr-2" />
                <span className="mr-2">{viewCount(likesCount)}</span>
              </button>
            </div>
            <div className="rounded-r-full bg-gray-100 hover:bg-gray-300 px-4 py-2">
              <button className="flex">
                <AiOutlineDislike className="text-2xl mr-2" />
              </button>
            </div>
          </div>
          <button className=" flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-300 mr-2">
            <PiShareFatLight className="mr-1" />
            Share
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-300 mr-2">
            <LiaDownloadSolid className="mr-1" />
            Download
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-300 ">
            More
          </button>
        </div>
      </div>
      <div className=" flex flex-col mt-2 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 cursor-pointer">
        <div className="flex ">
          <h1 className="font-semibold text-sm">
            {viewCount(viewsCount)} views
          </h1>
          <h1 className="font-semibold text-sm ml-2">Jul 20,2023</h1>
          <h1 className="font-semibold text-sm text-blue-800 ml-2">
            #1 on trending
          </h1>
        </div>
        <div className="mt-2 whitespace-pre-line">
          {showDescription ? description : description.slice(0, 200)}
          {/* {showDescription ? (
            <span
              className="font-bold cursor-pointer active:bg-gray-400 m-3"
              onClick={() => setShowDescription(false)}
            >
              Show less
            </span>
          ) : (
            <span
              className="font-bold cursor-pointer active:bg-gray-400 m-3"
              onClick={() => setShowDescription(true)}
            >
              Show More
            </span>
          )} */}
          <span
            className="font-bold cursor-pointer active:bg-gray-400 m-3"
            onClick={() => setShowDescription((bool) => !bool)}
          >
            {showDescription ? "Show less" : "Show more"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
