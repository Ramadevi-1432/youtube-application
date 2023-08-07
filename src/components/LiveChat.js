import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import {
  generate,
  generateMessage,
  generateProfileImage,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const message = useSelector((store) => store.chat.messages);
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          text: generateMessage(),
          profile: generateProfileImage(),
        })
      );
    }, 4000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1 className="font-semibold p-2">Live Chat</h1>
      <hr className="border border-gray-400" />
      <div className="flex flex-col-reverse overflow-y-auto h-[450px]">
        {message.map((chat, index) => (
          <ChatMessage
            key={index}
            name={chat.name}
            text={chat.text}
            profile={chat.profile}
          />
        ))}
      </div>
      <form
        className="mx-4 mt-2 mb-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "RamS",
              text: chatText,
              profile: generateProfileImage(),
            })
          );
          setChatText("");
        }}
      >
        <input
          className="border border-black px-3 py-1 w-[75%] rounded-lg"
          type="text"
          value={chatText}
          placeholder="Enter your message"
          onChange={(e) => setChatText(e.target.value)}
        />
        <button className="bg-green-600 px-3 py-1 mx-2 rounded-lg text-white font-semibold">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
