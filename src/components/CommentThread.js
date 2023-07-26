import React, { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import Comment from "./Comment";
import CommentReply from "./CommentReply";

const CommentThread = ({ videoId }) => {
  const [commentThread, setCommentThread] = useState([]);
  const [visible, setVisible] = useState(null);
  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);
  const getComments = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();
    // console.log(json.items[0]);
    setCommentThread(json.items);
  };
  return (
    <div>
      <h1 className="mt-3 mb-3 font-bold">30 Comments</h1>
      {commentThread.map((comment) => {
        return (
          <div key={comment.id} className="mt-6">
            <Comment
              author={
                comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
              }
              image={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              text={comment?.snippet?.topLevelComment?.snippet?.textOriginal}
              replies={comment?.replies?.comments?.length}
              visible={visible}
              setVisible={setVisible}
              id={comment.id}
            />
            {visible &&
              comment?.replies?.comments?.map((reply) => {
                return <CommentReply key={reply.id} reply={reply} />;
              })}
          </div>
        );
      })}
    </div>
  );
};

export default CommentThread;
