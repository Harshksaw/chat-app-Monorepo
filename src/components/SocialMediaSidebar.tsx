'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function SocialMediaSidebar({ onPlatformSelect }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const router = useRouter();
  const platforms = [
    { name: 'Instagram', unreadMessages: 15 },
    { name: 'Facebook', unreadMessages: 5 },
    { name: 'Twitter', unreadMessages: 9 },
    { name: 'LinkedIn', unreadMessages: 11 },
  ];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform.name); // Update selectedPlatform with the platform name
    // onPlatformSelect(platform.name);

    router.push(`/messaging/${platform.name.toLowerCase()}`); // Navigate to the platform's messaging page
  };

  return (
    <div className="  border-l   border-[#229799]  sidebar w-20 bg-gray-900 text-white h-full">
      <div className="space-y-4 w-20 bg-[#1E1E1E] text-white p-4 h-full pt-32 gap-10">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            onClick={() => handlePlatformSelect(platform)}

            
            className={`tab-button relative rounded-md p-2 ${selectedPlatform === platform.name ? 'bg-blue-500' : 'hover:bg-gray-400'}`}
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