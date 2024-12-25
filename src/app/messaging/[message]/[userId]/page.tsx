import React from 'react'

interface PageProps {
    params: {
      platform: string; 
    };
  }
  
const UserMessages = ({ params }: PageProps) => {
    const {  userId } = params;
    console.log("🚀 ~ UserMessages ~ userId:", userId)
  return (
    <div className='h-full w-full bg-green-300'>


        <h2>userId{userId}</h2>
    </div>
  )
}

export default UserMessages