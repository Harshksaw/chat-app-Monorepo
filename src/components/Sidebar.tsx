
'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Sidebarmapping from './sidebarmapping';
type Props = {
  onSelectConversation: (conversation: any) => void;
  onSelectUser: (user: any) => void;
  onSelectPlatform: (platform: any) => void;
  conversations: any[];
  users: any[];
  platforms: any[];
};
function Sidebar({ conversations, onSelectConversation, onSelectUser, onSelectPlatform }) {
  const [users, setUsers] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [selectedSidebar, setSelectedSidebar] = useState('conversations'); // Start with conversations

  // useEffect(() => {
  //   // Extract unique users from conversations
  //   const uniqueUsers = Array.from(
  //     new Set(conversations.flatMap((msg) => [msg.sender, msg.recipient]))
  //   );
  //   setUsers(uniqueUsers);

  //   // Extract unique platforms from conversations (assuming your data has platform info)
  //   const uniquePlatforms = Array.from(
  //     new Set(conversations.map((msg) => msg.platform)) 
  //   );
  //   setPlatforms(uniquePlatforms);
  // }, [conversations]);

  const handleConversationSelect = (conversation) => {
    onSelectConversation(conversation);
    // ... (reset other selections)
  };

  const handleUserSelect = (user) => {
    onSelectUser(user);
    // ... (reset other selections)
  };

  const handlePlatformSelect = (platform) => {
    onSelectPlatform(platform);
    // ... (reset other selections and fetch data for the platform)
  };

  return (
    <main className='w-fit h-full flex '>
    <div className="sidebar w-20 bg-gray-900 text-white p-4">
    <div className="sidebar-tabs flex flex-col items-center justify-around space-y-10">

      <button
        onClick={() => setSelectedSidebar("conversations")}
        className={`tab-button ${
          selectedSidebar === "conversations" ? "active" : ""
        }`}
      >
        <Image
          src="/Icons/elements.png" // Replace with your actual icon path
          alt="Conversations"
          width={32}
          height={32}

        />
      </button>

        <div className='flex flex-col items-center space-y-4 w-12 h-[1px] bg-white'>

        </div>

      <button
        onClick={() => setSelectedSidebar("conversations")}
        className={`tab-button ${
          selectedSidebar === "conversations" ? "active" : ""
        }`}
      >
        <Image
          src="/Icons/comment-text.png" // Replace with your actual icon path
          alt="Conversations"
          width={32}
          height={32}
          
        />
      </button>
      <button
        onClick={() => setSelectedSidebar("users")}
        className={`tab-button ${selectedSidebar === "users" ? "active" : ""}`}
      >
        <Image
          src="/Icons/sound-wave.png" // Replace with your actual icon path
          alt="Users"
          width={32}
          height={32}
        />
      </button>
      <button
        onClick={() => setSelectedSidebar("platforms")}
        className={`tab-button ${
          selectedSidebar === "platforms" ? "active" : ""
        }`}
      >
        <Image
          src="/icons/circle-plus.png" // Replace with your actual icon path
          alt="Platforms"
          width={32}
          height={32}
        />
      </button>
    </div>


      
    </div>

    <Sidebarmapping selectedSidebar={selectedSidebar}/>
    </main>
  );
}

export default Sidebar;