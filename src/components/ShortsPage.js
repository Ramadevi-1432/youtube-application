import React, { useEffect, useState } from "react";
import { SHORTS_API } from "../utils/constants";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    getShorts();
  }, []);
  const getShorts = async () => {
    const data = await fetch(SHORTS_API);
    const json = await data.json();
    console.log(json.items);
    setShorts(json?.items);
  };
  return shorts.length === 0 ? (
    "Loading"
  ) : (
    <>
      <div className="flex justify-center m-auto">
        <div className="flex flex-col justify-center gap-5">
          {shorts.map((short) => (
            <div className="flex" key={short.id.videoId}>
              <iframe
                className="rounded-3xl"
                width="290"
                height="490"
                autoFocus
                src={
                  "https://www.youtube.com/embed/" +
                  short?.id?.videoId +
                  "?autoplay=0&mute=0&rel=0"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="flex flex-col ml-4 justify-end">
                <AiFillLike
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mb-7 cursor-pointer"
                  size={40}
                />
                <AiFillDislike
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mb-7 cursor-pointer"
                  size={40}
                />
                <MdComment
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mb-7 cursor-pointer"
                  size={40}
                />
                <RiShareForwardFill
                  className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mb-7 cursor-pointer"
                  size={40}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShortsPage;
