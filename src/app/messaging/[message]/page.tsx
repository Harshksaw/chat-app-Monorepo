// app/messages/[platform]/page.tsx 
'use client'
import ChatConversation from "@/components/ChatUi";
import UserCard from "@/components/UserCard";
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
      { id: 1, name: 'Alice', username: '@alice123', text:'helloe leloeo leoeo' , time : '08 Dec 24'},
      { id: 2, name: 'Bob', username: '@bob456', text:'helloe leloeoewwe wewewdcs leoeo' , time : '08 Dec 24' },
      { id: 3, name: 'Bo3b', username: '@bobew456', text:'helloe leloeoweewwe wewewdcs leoeo' , time : '08 Dec 24' },
      { id: 4, name: 'B2ob', username: '@boweb456', text:'helloe leloeoewweewwe wewewdcs leoeo' , time : '08 Dec 24' },
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
    <div className="h-full w-full  flex border-[#229799] border-l">
      <div className="w-1/3 h-full bg-[#1E1E1E]">

      <h3 className="text-white font-bold text-3xl m-8">
        Messages
      </h3>

      <ul className=" p-0">
        {users.map((user) => (
          <li key={user.id} className="   rounded-sm shadow-md bg-inherit text-white"
          onClick={() => {
            setSelectedUserId(user.id);
          }}
          >

        {platform === 'twitter' && (
          // <div>
            <UserCard data={user}/>
          // </div>
        )}
        {platform === 'linkedin' && (
          <UserCard data={user}/>
        )}
        {platform === 'facebook' && (
   <UserCard data={user}/>
        )}
        {platform === 'instagram' && (
     <UserCard data={user}/>
        )}
          </li>
        ))}
      </ul>
      </div>

      <div className="w-2/3 h-full max-h-full ">
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