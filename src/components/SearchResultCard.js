import React from "react";

const SearchResultCard = ({ props }) => {
  const { channelTitle, description, title, thumbnails } = props.snippet;
  return (
    <div>
      <div className="flex mx-8 p-3 shadow-lg cursor-pointer hover:scale-105 hover:duration-75">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="h-[150px] w-[280px] rounded-lg"
        />
        <div className="flex flex-col mx-4">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="font-semibold mt-2 mb-2">{channelTitle}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
