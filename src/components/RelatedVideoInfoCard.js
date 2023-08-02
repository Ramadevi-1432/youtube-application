import React from "react";

const RelatedVideoInfoCard = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="mt-3">
      <div className="flex">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-[180px] rounded-lg"
        />
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-sm">{title}</h1>
          <p className="text-sm">{channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoInfoCard;
