import React, { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_SUGGESTION_API } from "../utils/constants";
import RelatedVideoInfoCard from "./RelatedVideoInfoCard";
import { Link } from "react-router-dom";

const RelatedVideoContainer = () => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  //   console.log(id);
  useEffect(() => {
    getSuggestedVideos();
    // eslint-disable-next-line
  }, []);
  const getSuggestedVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SUGGESTION_API);
    const json = await data.json();
    setSuggestedVideos(json?.items);
    // console.log(json?.items[0]);
  };
  //   console.log(suggestedVideos);
  //early return
  if (suggestedVideos?.length === 0) return null;
  return (
    <div>
      <h1 className="font-bold">Related Videos</h1>
      <ul>
        {suggestedVideos?.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video?.id?.videoId}>
            <li>
              <RelatedVideoInfoCard info={video} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RelatedVideoContainer;
