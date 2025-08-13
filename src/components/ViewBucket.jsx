import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ViewBucket = () => {
  const navigate = useNavigate();
  function handleNav() {
    navigate("/codebucket");
  }

  const { id } = useParams();
  const Allbuckets = useSelector((state) => state.codebucket.codebucket);
  const codebucket = Allbuckets.filter((p) => p._id === id)[0];
  console.log(codebucket);

  return (
    // Full Screen
    <div className="box-border pt-30 sm:pt-25   bg-gradient-to-l overflow-hidden from-[#fb7185] via-[#a21caf] to-[#6366f1] min-h-screen w-screen flex justify-center ">
     
      <div className="flex flex-col items-center justify-center gap-y-0 sm:gap-y-2.5 w-full   h-full">
        <div className="flex mt-10 sm:mt-0 flex-col  gap-y-10 sm:gap-y-0 sm:flex-row w-full  sm:gap-x-10 justify-center items-center ">
          <div className="flex w-3xs  md:w-md  flex-row gap-x-2.5  bg-white rounded-lg  justify-center items-center transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_8px_2px_#97266d]">
          <img 
          className="h-10 w-10  sm:h-12 sm:w-12 pl-3 py-2"
          src="https://imgs.search.brave.com/jydCAH_eDnPjxWVEkagWJmEj2jP9SzVuwrzup2ZSbTg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY1LzI4LzYx/LzM2MF9GXzE2NTI4/NjEwOF9SVzlocG0z/ZWZJdElKZWdra3py/YTZqaUd6YUlQdGhy/QS5qcGc" alt="" />
          <input
          className="w-full  pl-2.5 pr-10 py-2.5 text-md sm:text-lg md:text-xl outline-none text-black placeholder:font-semibold placeholder:font-serif "
          type="text"
          placeholder="Enter Bucket Title"
          value={codebucket.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
          <button
            onClick={handleNav}
            class="relative inline-block text-xl group"
          >
            <span class="relative z-10 block px-7 py-2 sm:px-8 sm:py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full  px-8 py-2.5 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Back</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
        <div className="flex mt-10 px-7 lg:px-0 w-full h-full mb-10 sm:mb-0  justify-center  ">
          <textarea
            name=""
            className="bg-white  shadow-[-1px_9px_16px_2px_rgba(47,_204,_212,_0.77)] outline-none text-lg sm:text-xl md:text-2xl px-4 py-3 rounded-lg"
            rows={18}
            cols={90}
            disabled
            value={codebucket.value}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBucket;
