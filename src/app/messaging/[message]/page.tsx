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

export default function MessagePage({ params }: PageProps) {
  const { message: platform } = use(params);;
  console.log("🚀 ~ MessagePage ~ platform:", platform)
  const [selectedUserId, setSelectedUserId] = useState("");
  console.log("🚀 ~ MessagePage ~ selectedUserId:", selectedUserId)


  const platformUsers = {
    twitter: [
      { id: 1, name: 'Alice', username: '@alice123', text: 'Hello, how are you? #FeelingGoodFriday', time: '08 Dec 24' },
      { id: 2, name: 'Bob', username: '@bob456', text: 'Good morning! ☕️ #EarlyBird', time: '08 Dec 24' },
      { id: 3, name: 'Charlie', username: '@charlie789', text: 'What\'s up? 🤔 #TGIF', time: '08 Dec 24' },
      { id: 4, name: 'David', username: '@david101', text: 'Have a great day! 😊 #FridayVibes', time: '08 Dec 24' },
      { id: 5, name: 'Eve', username: '@eve567', text: 'Just finished a great workout! 💪 #FitnessMotivation', time: '08 Dec 24' },
      { id: 6, name: 'Frank', username: '@frank890', text: 'Excited for the weekend! 🎉 #WeekendMood', time: '08 Dec 24' },
      { id: 7, name: 'Grace', username: '@grace123', text: 'Enjoying the sunshine ☀️ #SummerVibes', time: '08 Dec 24' },
      { id: 8, name: 'Henry', username: '@henry456', text: 'Ready for a productive day! 🚀 #WorkMode', time: '08 Dec 24' },
      { id: 9, name: 'Isabella', username: '@isabella789', text: 'Can\'t wait for the concert tonight! 🎤 #MusicLover', time: '08 Dec 24' },
      { id: 10, name: 'Jack', username: '@jack101', text: 'Just got a new phone! 📱 #TechEnthusiast', time: '08 Dec 24' },
    ],
    linkedin: [
      { id: 1, name: 'Alice', username: '@alice123', text: 'Looking forward to connecting! #OpenToWork', time: '08 Dec 24' },
      { id: 2, name: 'Bob', username: '@bob456', text: 'Excited to share my latest project. #ProjectManagement', time: '08 Dec 24' },
      { id: 3, name: 'Charlie', username: '@charlie789', text: 'Let\'s collaborate! #Networking', time: '08 Dec 24' },
      { id: 4, name: 'David', username: '@david101', text: 'Check out my portfolio. #WebDevelopment', time: '08 Dec 24' },
      { id: 5, name: 'Eve', username: '@eve567', text: 'Attending a conference next week. #ProfessionalDevelopment', time: '08 Dec 24' },
      { id: 6, name: 'Frank', username: '@frank890', text: 'Sharing my insights on the latest industry trends. #ThoughtLeadership', time: '08 Dec 24' },
      { id: 7, name: 'Grace', username: '@grace123', text: 'Looking for new opportunities. #CareerChange', time: '08 Dec 24' },
      { id: 8, name: 'Henry', username: '@henry456', text: 'Just finished a great course on data analysis. #DataScience', time: '08 Dec 24' },
      { id: 9, name: 'Isabella', username: '@isabella789', text: 'Happy to connect with fellow professionals. #LinkedIn', time: '08 Dec 24' },
      { id: 10, name: 'Jack', username: '@jack101', text: 'Sharing my experience in marketing and sales. #Marketing', time: '08 Dec 24' },
    ],
    facebook: [
      { id: 1, name: 'Alice', username: '@alice123', text: 'Had a great time at the beach with family! 🏖️ #FamilyVacation', time: '08 Dec 24' },
      { id: 2, name: 'Bob', username: '@bob456', text: 'Happy birthday to me! 🎉 #BirthdayCelebration', time: '08 Dec 24' },
      { id: 3, name: 'Charlie', username: '@charlie789', text: 'Just got a new job! Excited for this new chapter. 🚀 #NewJob', time: '08 Dec 24' },
      { id: 4, name: 'David', username: '@david101', text: 'Loving the new season of my favorite show. 📺 #NetflixAndChill', time: '08 Dec 24' },
      { id: 5, name: 'Eve', username: '@eve567', text: 'Trying out a new recipe tonight. 👩‍🍳 #Foodie', time: '08 Dec 24' },
      { id: 6, name: 'Frank', username: '@frank890', text: 'Sharing some photos from my recent trip. ✈️ #TravelGram', time: '08 Dec 24' },
      { id: 7, name: 'Grace', username: '@grace123', text: 'Enjoying a relaxing evening at home. 😌 #CozyVibes', time: '08 Dec 24' },
      { id: 8, name: 'Henry', username: '@henry456', text: 'Just adopted a new puppy! 🐶 #DogLover', time: '08 Dec 24' },
      { id: 9, name: 'Isabella', username: '@isabella789', text: 'Celebrating a friend\'s birthday tonight. 🥳 #FriendshipGoals', time: '08 Dec 24' },
      { id: 10, name: 'Jack', username: '@jack101', text: 'Going for a hike this weekend. 🥾 #NatureLover', time: '08 Dec 24' },
    ],
    instagram: [
      { id: 1, name: 'Alice', username: '@alice123', text: 'Check out my latest photo! 📸 #Photography', time: '08 Dec 24' },
      { id: 2, name: 'Bob', username: '@bob456', text: 'New post up now! 🔥 #InstaDaily', time: '08 Dec 24' },
      { id: 3, name: 'Charlie', username: '@charlie789', text: 'Loving this filter! ✨ #InstaFilter', time: '08 Dec 24' },
      { id: 4, name: 'David', username: '@david101', text: 'Throwback to last summer. ☀️ #TBT', time: '08 Dec 24' },
      { id: 5, name: 'Eve', username: '@eve567', text: 'Sharing my favorite outfit of the day. 👗 #OOTD', time: '08 Dec 24' },
      { id: 6, name: 'Frank', username: '@frank890', text: 'Just got back from an amazing vacation. 🌴 #TravelPhotography', time: '08 Dec 24' },
      { id: 7, name: 'Grace', username: '@grace123', text: 'Enjoying a delicious brunch. 🥞 #BrunchTime', time: '08 Dec 24' },
      { id: 8, name: 'Henry', username: '@henry456', text: 'Exploring the city with friends. 🏙️ #CityLife', time: '08 Dec 24' },
      { id: 9, name: 'Isabella', username: '@isabella789', text: 'Attending a fashion show tonight. 👠 #Fashionista', time: '08 Dec 24' },
      { id: 10, name: 'Jack', username: '@jack101', text: 'Sharing my latest artwork. 🎨 #Artist', time: '08 Dec 24' },
    ],
  };

  // if (!platform || !platformUsers[platform]) {
  //   notFound();
  // }

  const users = platformUsers[platform] || [];

  return (
    <div className="h-full w-full  flex border-[#229799] border-l">
      <div className="w-2/6 h-full bg-[#1E1E1E] overflow-y-auto scrollbar-hide">

        <h3 className="text-white font-bold text-3xl m-8">
          Messages
        </h3>

        <ul className="  ">
          {users.map((user) => (
            <li key={user.id} className="    shadow-md bg-inherit text-white"
              onClick={() => {
                setSelectedUserId(user.id);
              }}
            >

              {platform === 'twitter' && (

                <UserCard data={user} />

              )}
              {platform === 'linkedin' && (
                <UserCard data={user} />
              )}
              {platform === 'facebook' && (
                <UserCard data={user} />
              )}
              {platform === 'instagram' && (
                <UserCard data={user} />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className=" w-4/5 h-full max-h-full flex overflow scrollbar-hide">
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