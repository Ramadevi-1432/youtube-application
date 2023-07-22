import React from "react";
import { viewCount } from "../utils/views";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const views = statistics.viewCount;
  return (
    <ul className=" m-2 p-2 w-[230px] hover:scale-110 hover:shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <li className="font-bold text-[12px]">{title}</li>
      <li className="text-gray-600 text-xs">{channelTitle}</li>
      <li className="text-gray-600 text-xs">{viewCount(views)} views</li>
    </ul>
  );
};

export default VideoCard;
