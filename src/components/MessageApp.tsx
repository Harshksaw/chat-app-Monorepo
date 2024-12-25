'use client'
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function MessageApp() {
    const [messages, setMessages] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null); // New state for selected user
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    // const [isClient, setIsClient] = useState(false);
    // useEffect(() => {
    //   setIsClient(true);
    // }, []);
    useEffect(() => {
      if (true) {
        const fetchMessages = async () => {
          const response = await axios.get('/api/messages');
          console.log("🚀 ~ fetchMessages ~ response:", response)
          const data = await response.data;
          console.log("🚀 ~ fetchMessages ~ data:", data)
          setMessages(data);
        };
        fetchMessages();
      }
    }, []);
  
    const handlePlatformSelect = (platform) => {
      setSelectedPlatform(platform);
      setSelectedConversation(null);
      setSelectedUser(null);
  
      // Fetch data for the selected platform
      fetch(`/api/messages?platform=${platform}`) 
        .then(res => res.json())
        .then(data => {
          // Update state with the fetched data
          setMessages(data); 
        });
    };
  
    const handleConversationSelect = (conversation) => {
      setSelectedConversation(conversation);
      setSelectedUser(null); // Reset selected user when a conversation is selected
    };
  
    const handleUserSelect = (user) => {
      setSelectedUser(user);
      setSelectedConversation(null); // Reset selected conversation when a user is selected
    };
  
    // Filter messages based on selected conversation or user
    const displayedMessages = messages.filter((message) => {
      if (selectedConversation) {
        return (
          message.sender.id === selectedConversation.sender.id ||
          message.recipient.id === selectedConversation.sender.id
        );
      } else if (selectedUser) {
        return (
          message.sender.id === selectedUser.id ||
          message.recipient.id === selectedUser.id
        );
      }
      return false; // No conversation or user selected
    });
  
    return (
      <div className="message-app">

        <Sidebar

         onSelectConversation={handleConversationSelect}
         onSelectUser={handleUserSelect}
         onSelectPlatform={handlePlatformSelect}
         conversations={messages}
        //  users={messages}
         platforms={messages}
      />
        {/* <Sidebar
          conversations={messages}
          onSelectConversation={handleConversationSelect}
          onSelectUser={handleUserSelect} 
        />
        <div className="message-area">
          <MessageList messages={displayedMessages} />
          <MessageInput />
        </div> */}
      </div>
    );
  }
  
  export default MessageApp;