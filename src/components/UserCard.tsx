import React, { useState } from 'react';

function UserCard({ data}) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div 
    className={`card relative flex items-center rounded-lg  cursor-pointer shadow-lg 
        transition-colors duration-200 ${isSelected ? 'bg-[#525252]' : 'bg-[#3D3D3D]'}`} 
      onClick={handleClick}
    >
    <div className="border-b border-[#326C6D] w-full flex items-center p-6  mx-2">
        <div className="w-16 h-12 bg-gray-200 rounded-full mr-6">
          {/* <img 
            src={data?.image} 
            alt="UserCard Image" 
            className="w-full h-full object-cover" 
          /> */}
        </div>
        <div className="card-content text-left flex justify-between w-full">

            <div>

            <h3 className="font-bold text-xl">{data.name}</h3>
            <p className="text-white text-md">{data.text.slice(0, 15)}</p>
            </div>
            <div>
            <p className="text-white text-sm">{data.time}</p>
            </div>
        
      
        </div>
      </div>
    </div>
  );
}

export default UserCard;