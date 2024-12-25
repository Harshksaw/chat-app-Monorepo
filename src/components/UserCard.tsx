import React, { useState } from 'react';

function UserCard({ data}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div 
      className={`card relative  flex  items-center  rounded-lg p-4 cursor-pointer
         transition-colors duration-200 ${isSelected ? 'bg-[#525252]' : 'bg-[#1E1E1E]'}`} 
      onClick={handleClick}
    >
      <div className=" w-8 h-8  bg-gray-200 rounded-full mr-10">
        {/* <img 
          src={data?.image} 
          alt="UserCard Image" 
          className="w-full h-full object-cover" 
        /> */}
      </div>
      <div className="card-content text-left">
        <h3 className="font-bold text-xl">{data.name}</h3>
        <p className="text-white text-md">{data.text.slice(0,15)}</p>
      </div>
    </div>
  );
}

export default UserCard;