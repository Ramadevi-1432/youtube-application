import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import CommentThread from "./CommentThread";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const id = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col mx-5">
      <div className="w-[70%]">
        <iframe
          width="1018"
          height="500"
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
      <div className="flex justify-between my-2">
        <div className="w-[70%]">
          <VideoInfo />
          <div>
            <CommentThread videoId={id} />
          </div>
        </div>
        <div className="w-[30%]">Suggestion</div>
      </div>
    </div>
  );
};

export default WatchPage;
