import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocodebucket, updateTocodebucket } from "../redux/codebucketSlice";
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const bucketId = searchParams.get("bucketId");
  const dispatch = useDispatch();
  const AllBuckets = useSelector((state)=> state.codebucket.codebucket);

  useEffect(() => {
   if(bucketId){
    const bucket = AllBuckets.find((b) =>b._id === bucketId);
    setTitle(bucket.title);
    setValue(bucket.value);
   }
  }, [bucketId])
  
  function createBucket() {
    const bucket = {
      title: title,
      value: value,
      _id: bucketId || Date.now().toString(36), // Generate a unique ID
      createAt: new Date().toISOString(), // Store the creation date
    };
    if (bucketId) {
      // update
      dispatch(updateTocodebucket(bucket));
    } else {
      // create
      dispatch(addTocodebucket(bucket));
    }
    // after creating or updation,
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="flex box-border flex-col pt-30 sm:pt-25 sm:gap-y-2.5   bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] w-screen min-h-screen">
      <div className="flex flex-col sm:flex-row w-full gap-y-10 items-center sm:gap-y-0 mt-10 sm:mt-0 sm:gap-x-10  justify-center ">
        {/* Input Field */}
        <div className="flex sm:w-sm md:w-md w-3/4 mx-10 sm:mx-0 flex-row sm:gap-x-2.5  bg-white rounded-lg  justify-center items-center transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_8px_2px_#97266d]">
          <img 
          className="h-10 w-10  sm:h-12 sm:w-12 pl-3 py-2"
          src="https://imgs.search.brave.com/jydCAH_eDnPjxWVEkagWJmEj2jP9SzVuwrzup2ZSbTg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY1LzI4LzYx/LzM2MF9GXzE2NTI4/NjEwOF9SVzlocG0z/ZWZJdElKZWdra3py/YTZqaUd6YUlQdGhy/QS5qcGc" alt="" />
          <input
          className="w-sm pl-2.5 sm:pr-10 py-2.5 text-md sm:text-lg md:text-xl outline-none text-black placeholder:font-semibold placeholder:font-serif "
          type="text"
          placeholder="Enter Bucket Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <button
          onClick={createBucket}
          className="relative inline-flex items-center mx-25 sm:mx-0 justify-center px-4 py-3 md:px-6 md:py-3 overflow-hidden font-bold text-md sm:text-xl text-white border-white border bg-[#344CB7]  rounded-lg shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center  w-full h-full duration-300 -translate-x-full  bg-[#344CB7] text-white group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              >

              </path>
            </svg>
          </span>

         
          <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform text-white group-hover:translate-x-full ease">
            {bucketId ? "Update Bucket" : "Create Bucket"}
          </span>

         
          <span className="relative invisible">
            {bucketId ? "Update Bucket" : "Create Bucket"}
          </span>
        </button>
      </div>
      <div className="flex mt-10  mx-7 lg:mx-0 mb-10 sm:mb-0 justify-center">
        <textarea
          name=""
          className="bg-white shadow-[-1px_9px_16px_2px_rgba(47,_204,_212,_0.77)] outline-none text-lg sm:text-xl md:text-2xl px-4 py-3 rounded-lg"
          rows={18}
          cols={90}
          value={value}
          placeholder="Enter your code here..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
