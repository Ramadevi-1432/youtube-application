import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import CommentThread from "./CommentThread";
import LiveChat from "./LiveChat";
import RelatedVideoContainer from "./RelatedVideoContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const id = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col mx-5">
      <div className="flex">
        <div className="w-[70%]">
          <iframe
            // width="997"
            // height="550"
            className="w-full h-full"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[30%] border border-gray-400 rounded-lg ml-4">
          <LiveChat />
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="w-[70%]">
          <VideoInfo />
          <div>
            <CommentThread videoId={id} />
          </div>
        </div>
        <div className="w-[30%] ml-4 ">
          <RelatedVideoContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
