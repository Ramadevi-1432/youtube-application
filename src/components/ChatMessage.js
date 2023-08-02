import React from "react";

const ChatMessage = ({ name, text, profile }) => {
  return (
    <div className="flex items-center m-3 p-2 shadow-md rounded-md dark:bg-zinc-900">
      <img className="h-6 w-6 rounded-full" src={profile} alt={name} />
      <span className="ml-2 mr-2 font-bold">{name}</span>
      <span>{text}</span>
    </div>
  );
};

export default ChatMessage;
