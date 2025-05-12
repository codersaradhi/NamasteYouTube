import React, { useEffect, useState } from "react";
import ChatMessaging from "./ChatMessaging";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName } from "../utils/helper";
import { getRandomChatMessage } from "../utils/helper";

//API polling
const LiveChat = () => {
  const [livemessage, setlivemessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const pollingtimmer = setInterval(() => {
      console.log("Api is polling...");
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomChatMessage(),
        })
      );
    }, 3000);
    return () => {
      clearInterval(pollingtimmer);
    };
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold ">Live Chat</h1>
      <div className="overflow-y-scroll border border-b-0 border-gray-300 w-[425px] h-[500px] rounded-xl p-2 flex flex-col-reverse">
        {ChatMessages.map(
          (
            c,
            i // Disclamiar: don't use indexs as key
          ) => (
            <ChatMessaging key={i} user_name={c.name} user_msg={c.message} />
          )
        )}
      </div>
      <form
        className=" p-2 ml-2 border border-t-0 border-gray-300"
        onSubmit={(e) => { e.preventDefault();
            dispatch(
                addMessage({
                    name:"Chaitanya Saradhi",
                    message: livemessage
                })
            
            );
            setlivemessage("")
        }}
        
      >
        <input
          className="w-[85%] p-2"
          placeholder="Write something"
          value={livemessage}
          onChange={(e) => setlivemessage(e.target.value)}
        ></input>
        <button className="bg-green-200 px-3 py-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
