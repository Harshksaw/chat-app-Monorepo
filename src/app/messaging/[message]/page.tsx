// app/messages/[platform]/page.tsx 
'use client'
import ChatConversation from "@/components/ChatUi";
import { useState } from "react";
import { use } from 'react';  
interface PageProps {
  params: {
    platform: string; 
  };
}

export default  function MessagePage({ params }: PageProps) {
  const {  message: platform } =  use(params);;
  console.log("🚀 ~ MessagePage ~ platform:", platform)
  const [selectedUserId, setSelectedUserId] = useState("");
  console.log("🚀 ~ MessagePage ~ selectedUserId:", selectedUserId)

  const platformUsers = {
    twitter: [
      { id: 1, name: 'Alice', username: '@alice123' },
      { id: 2, name: 'Bob', username: '@bob456' },
    ],
    linkedin: [
      { id: 3, name: 'Charlie', title: 'Software Engineer' },
      { id: 4, name: 'David', title: 'Data Scientist' },
    ],
    facebook: [
      { id: 5, name: 'Eve', profilePicture: '/images/eve.jpg' },
      { id: 6, name: 'Frank', profilePicture: '/images/frank.jpg' },
    ],
    instagram: [
      { id: 7, name: 'Grace', username: '@grace789' },
      { id: 8, name: 'Henry', username: '@henry000' },
    ],
  };

  // if (!platform || !platformUsers[platform]) {
  //   notFound();
  // }

  const users = platformUsers[platform] || [];

  return (
    <div className="h-full w-full bg-green-300 flex">
      <div className="w-1/3 h-full bg-red-400">

      <ul className="space-y-4 p-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-lg shadow-md bg-slate-700"
          onClick={() => {
            setSelectedUserId(user.id);
          }}
          >

        {platform === 'twitter' && (
          <div>
            <p>{user.name} ({user.username})</p>
          </div>
        )}
        {platform === 'linkedin' && (
          <div>
            <p>{user.name} - {user.title}</p>
          </div>
        )}
        {platform === 'facebook' && (
          <div>
            {/* <img src={user.profilePicture} alt={user.name} /> */}
            <p>{user.name}</p>
          </div>
        )}
        {platform === 'instagram' && (
          <div>
            <p>{user.name} ({user.username})</p>
          </div>
        )}
          </li>
        ))}
      </ul>
      </div>

      <div className="w-2/3 h-full bg-green-500">
      <ChatConversation userId={selectedUserId}
      
      />
        {/* {selectedUserId && (
          <div className="p-4">
            <h2 className="text-2xl font-bold">Messages</h2>
            <p>Selected user ID: {selectedUserId}</p>
          </div>
        )} */}
        </div>

    </div>
  );
}