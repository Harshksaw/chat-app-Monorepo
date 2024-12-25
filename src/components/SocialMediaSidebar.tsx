'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function SocialMediaSidebar({ onPlatformSelect }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const platforms = [
    { name: 'Instagram', unreadMessages: 15 },
    { name: 'Facebook', unreadMessages: 5 },
    { name: 'Twitter', unreadMessages: 9 },
    { name: 'LinkedIn', unreadMessages: 11 },
  ];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform.name); // Update selectedPlatform with the platform name
    onPlatformSelect(platform.name);
  };

  return (
    <div className="  border-l border-r  border-green-500 sidebar w-20 bg-gray-900 text-white h-full">
      <div className="space-y-4 w-20 bg-gray-800 text-white p-4 h-full">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            onClick={() => handlePlatformSelect(platform)}

            
            className={`tab-button relative rounded-full p-2 ${selectedPlatform === platform.name ? 'bg-blue-500' : 'hover:bg-gray-100'}`}
          >
         
            <Image
              src={`/Icons/${platform.name}.png`}
              alt={platform.name}
              
              width={40}
              height={40}
            />
      {platform.unreadMessages > 0 && (
            <p className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {platform.unreadMessages}
            </p>
          )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMediaSidebar;