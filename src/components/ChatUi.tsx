// app/messages/[platform]/[userId]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';

interface Message {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
}

export default function ChatConversation({userId}:any) {
  const searchParams = useSearchParams();
  const platform = searchParams.get('message');
  console.log("🚀 ~ ChatConversation ~ platform:", platform, "--", userId)

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
      text: "That sounds amazing, Krishangi! 🎉 We'd love to work with you. For this campaign, we can offer a $300 sponsorship plus a package of our newest skincare products. Does that work for you?",
      sender: "platform",
      time: "10:25 AM",
    },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
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
        console.log("🚀 ~ fetchMessages ~ data:", data)
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [platform, userId]);

  const handleSendMessage = async () => {
    // TODO: Send the new message to your API
    console.log('Sending message:', newMessage);

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
    setNewMessage('');
  };

  return (
    <div className="chat-conversation h-full flex flex-col">
      <div className="chat-header p-4 bg-gray-800 text-white flex items-center">
        {/* Replace with actual user details */}
        <div className="w-8 h-8 rounded-full bg-gray-700 mr-2"></div> 
        <h2 className="text-lg font-medium">User {userId}</h2>
      </div>
      <div className="chat-messages overflow-y-auto flex-1 p-4">
        {isLoading ? (
          <p>Loading messages...</p>
        ) : (
          <ul>
             <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>
          </ul>
        )}
      </div>
      <div className="chat-input p-4 bg-gray-200">
        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 mr-2 p-2 rounded-lg border border-gray-400"
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
      <div className={`flex ${isUser ? "justify-start" : "justify-end"}`}>
        <div
          className={`max-w-[75%] p-3 rounded-lg shadow-md ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
          }`}
        >
          <p>{message.text}</p>
          <div className="text-sm text-gray-300 mt-1 text-right">{message.time}</div>
        </div>
      </div>
    );
  };
  