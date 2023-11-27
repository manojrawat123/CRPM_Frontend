import React from "react";
import Skeleton from "react-loading-skeleton";

const LeadFollowUpLeadLoader = () => {
  return (
    <>
      <div className="mx-4">
        <div className=" grid sm:grid-cols-3 grid-cols-1 text-center border border-solid border-green-500 my-4 px-8 rounded-xl">
          <h1 className="text-xl font-bold p-2 col-span-1">
          <Skeleton height={30} />
          </h1>
          <div className="p-2 sm:col-span-2">
            <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-t-xl">
          <div className="col-span-2 font-bold"> <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700 overflow-auto">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold">
          <div className="col-span-2 font-bold"> <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold">
          <div className="col-span-2 font-bold"> <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold">
          <div className="col-span-2 font-bold ">  <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700  overflow-x-auto">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold">
          <div className="col-span-2 font-bold ">  <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700  overflow-x-auto">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold">
          <div className="col-span-2 font-bold ">  <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700  overflow-x-auto">
          <Skeleton height={30} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-b-xl">
          <div className="col-span-2 font-bold ">  <Skeleton height={30} /></div>
          <div className="col-span-3 text-gray-700  overflow-x-auto">
          <Skeleton height={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUpLeadLoader;
