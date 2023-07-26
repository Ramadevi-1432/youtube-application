import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const CommentReply = ({ reply }) => {
  const { authorDisplayName, authorProfileImageUrl, textOriginal } =
    reply.snippet;
  return (
    <div className="ml-14 mb-2">
      <div className="flex items-center">
        <img
          className="rounded-full h-7 w-7 "
          src={authorProfileImageUrl}
          alt={authorDisplayName}
        />
        <div className="flex flex-col px-4">
          <div>
            <span className="font-semibold">{authorDisplayName}</span>
            <span className="text-gray-400 ml-2">2 days ago</span>
          </div>
          <p>{textOriginal}</p>
        </div>
      </div>
      <div className="flex mt-2 ml-14 items-center">
        <BiLike size={20} />
        <span className="ml-2 mr-2">20</span>
        <BiDislike size={20} />
        <span className="ml-4">Reply</span>
      </div>
    </div>
  );
};

export default CommentReply;
