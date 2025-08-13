import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Removecodebucket } from "../redux/codebucketSlice";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

const Codebucket = () => {
  const buckets = useSelector((state) => state.codebucket.codebucket);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  function handleDelete(bucketId) {
    dispatch(Removecodebucket(bucketId));
  }

  const filteredData = buckets
    .filter((codebucket) =>
      codebucket.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

  return (
    <div className="box-border flex flex-col  items-center min-h-screen bg-gradient-to-bl from-[#e879f9] via-[#4ade80] to-[#be123c]  w-auto pt-25">
      <div className="flex flex-row w-11/12  items-center rounded-lg mt-20  sm:mt-0 sm:w-3/4 md:w-1/2 xl:w-2/6 border-2    bg-white justify-center shadow-[0px_0px_20px_5px_#1a202c]">
        <img
          className="rounded-md h-10 w-10 sm:h-15 sm:w-20"
          src="https://static.vecteezy.com/system/resources/thumbnails/007/634/946/small/magnifying-glass-icon-design-template-free-vector.jpg"
          loading="lazy"
          alt=""
        />
        <input
          type="search"
          className="w-full p-2 text-md sm:text-lg md:text-xl outline-none  text-black placeholder:font-semibold placeholder:font-serif"
          placeholder="Search Buckets here.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col my-10 w-full  min-h-screen  items-center">
        {filteredData.length > 0 &&
          filteredData.map((codebucket) => {
            const isoDate = `${codebucket.createAt}`;
            const formattedDate = format(new Date(isoDate), "dd MMM yyyy hh:mm:ss");
            return (
              <div
                key={codebucket?._id}
                // break-all : breaks long words to fit in a container
                className=" box-border m-5 p-5 break-all w-11/12 sm:w-3/4 md:w-1/2   h-auto xl:w-2/6  bg-[#FAF9EE]  transition-shadow duration-500 ease-in-out hover:shadow-[0px_0px_20px_5px_#5a67d8] rounded-lg  text-center"
              >
                
              
                <div className="flex flex-col justify-center  gap-y-8 items-center">
                  <div className="font-bold text-xl  sm:text-2xl">{codebucket.title}</div>
                  <div className="text-md sm:text-lg font-medium" > {codebucket.value}</div>
                  <div className="flex gap-y-5 sm:gap-y-0  flex-col sm:flex-row sm:w-full justify-around">
                    <button className="relative rounded sm:text-lg  font-semibold px-4 py-2 sm:px-5 sm:py-2.5 overflow-hidden group bg-blue-600  hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                      <NavLink to={`/?bucketId=${codebucket?._id}`}>
                        Edit
                      </NavLink>
                      <span class="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span class="relative"></span>
                    </button>
                    <button className="relative sm:text-lg font-semibold rounded px-4 py-2 sm:px-5 sm:py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-600 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                      <NavLink to={`/codebucket/${codebucket?._id}`}>
                        View
                      </NavLink>
                      <span class="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span class="relative"></span>
                    </button>
                    <button
                      onClick={() => handleDelete(codebucket?._id)}
                      className="relative rounded cursor-pointer sm:text-lg font-semibold px-4 py-2 sm:px-5 sm:py-2.5 overflow-hidden group bg-teal-600  hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-teal-400 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span class="relative"> Delete</span>
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(codebucket.value);
                        toast.success("Bucket Copied Sucessfully");
                      }}
                      className="relative rounded cursor-pointer  sm:text-lg font-semibold px-4 py-2 sm:px-5 sm:py-2.5 overflow-hidden group bg-emerald-600  hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300"
                    >
                      <span class="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <span class="relative">Copy</span>
                    </button>
                  </div>
                  <div className="text-lg font-semibold">{formattedDate}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Codebucket;
