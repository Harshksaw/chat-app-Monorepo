"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="message-area flex flex-col w-full h-[10vh]">
      <div className="message-header bg-[#424242] text-white p-4 flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <span className="text-3xl font-extralight text-[#48CFCB] ">
              Zen
            </span>
            <h2 className=" social-links  text-6xl">Soc</h2>
          </div>
        </div>
        <div className=" h-10 rounded-lg flex items-center bg-[#5C5C5C]  px-4 py-2  md:w-[40vw] lg: w-[50rem] lg:w-[60rem]">
          <Image
            // ref={"../../../public/Icons/search.png"}
            src="/Icons/search.png"
            width={30}
            height={30}
            alt="filter"
            className="w-6 h-6 mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className=" bg-[#5C5C5C] rounded px-2 py-1  mr-2 md:w-[40rem] lg:w-[50rem] text-white"
          ></input>

          <div className="bg-white w-[1px] h-8"></div>

          <div className="ml-4 text-white">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md 
               px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  items-center "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              // onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg 
                className="-ml-0.5 h-7 w-7 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"

              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>

             


              <p className="text-white text-2xl montserrat-font">

              Filter
              </p>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
            <h1 className="text-xl font-bold">Harsh</h1>


            <div className="w-10 h-10 bg-white  flex 
             flex-row items-center justify-center mr-10 rounded-full">

            <Image src="/Icons/user.png" width={30} height={30}

            
            alt="bell" 
            // className="w-6 h-6 mr-2 self-center" 
            />
            </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
