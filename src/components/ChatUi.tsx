// app/messages/[platform]/[userId]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

interface Message {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
}

export default function ChatConversation({ userId }: any) {
  const searchParams = useSearchParams();
  const platform = searchParams.get("message");
  // console.log("🚀 ~ ChatConversation ~ platform:", platform, "--", userId);

  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Hi, I'm Krishangi, a content creator with over 20k followers. I love your skincare products and would love to collaborate! Do you have any partnership opportunities? 🧴",
      sender: "user",
      time: "10:03 AM",
    },
    {
      id: 2,
      text: "Hi Krishangi! Thanks for reaching out! 🫶 Your content looks great. Can you share your audience details and any collab ideas you have in mind?",
      sender: "platform",
      time: "10:15 AM",
    },
    {
      id: 3,
      text: "Thank you so much! My audience is mostly women aged 18-35, based in India and the U.S., and I have an engagement rate of 6%. I'd love to create Instagram Reels showing my skincare routine.",
      sender: "user",
      time: "10:20 AM",
    },
    {
      id: 4,
      text: "That sounds fantastic! We'd love to see a draft of your content plan. Can you send us a proposal?",
      sender: "platform",
      time: "10:25 AM",
    },
    {
      id: 5,
      text: "Absolutely! I'll send over a proposal by the end of the day. Looking forward to working together!",
      sender: "user",
      time: "10:30 AM",
    },
    {
      id: 6,
      text: "Great! We'll review it and get back to you soon. Thanks, Krishangi!",
      sender: "platform",
      time: "10:35 AM",
    }
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!platform || !userId) {
        notFound();
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`/api/messages/${platform}/${userId}`); // Replace with your API endpoint
        const data = await response.json();
        console.log("🚀 ~ fetchMessages ~ data:", data);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [platform, userId]);

  const handleSendMessage = async () => {
    // TODO: Send the new message to your API
    console.log("Sending message:", newMessage);

    // Update the messages state with the new message (optimistic update)
    setMessages([
      ...messages,
      {
        id: messages.length + 1, // Replace with actual ID generation
        senderId: 1, // Replace with the actual sender ID
        content: newMessage,
        timestamp: new Date().toISOString(),
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-red-300 overflow-y-auto scrollbar-hide">
      <div className="chat-conversation flex-1 bg-[#3D3D3D] flex flex-col">

        <div className="chat-header fixed z-33 p-4 text-white flex items-center bg-[#3D3D3D] w-full ">
          <div className="w-10 h-10 rounded-full bg-white mr-2"></div>
          <h1 className="text-lg font-medium">User {userId}</h1>
        </div>

        <div className="  chat-messages overflow-y-auto flex-1 z-1 p-4 mt-28 scrollbar-hide pb-16">
          {isLoading ? (
            <p>Loading messages...</p>
          ) : (
            <div className="flex-1 overflow-y-auto max-h-full space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}
            </div>
          )}
        </div>
        <div className="chat-input p-2 bg-inherit absolute bottom-0 w-[55vw] mx-10">
          <div className="flex">

            <input
              type="text"
              placeholder="Message..."
              className="flex-1 mr-2 p-2 rounded-lg border border-gray-400 bg-[#5A5A5A] text-white"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MessageProps {
  message: {
    text: string;
    sender: "user" | "platform";
    time: string;
  };
}

const MessageBubble = ({ message }: MessageProps) => {
  const isUser = message.sender === "user";
  return (
    <div className={` flex ${isUser ? "justify-start" : "justify-end"}`}>
      
      <div className="max-w-[60%] flex-col flex mx-2">

        <div className={` flex  gap-2  ${isUser ? "flex-row" : "flex-row-reverse"}`}>

        <div className="w-14 h-10 rounded-full bg-white p-4  "></div>
        <div
          className={`p-3 rounded-lg shadow-md ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
          }`}
        >
          <p className="text-white font-montserrat text-lg font-medium leading-normal">
            {message.text}
          </p>
        </div>

        </div>

        <div
          className={` text-sm text-gray-300 mt-1 ${
            isUser ? "text-left ml-12" : "text-right mr-12"
          }`}
        >
          {message.time}
        </div>
        
      </div>
    </div>
  );
};
