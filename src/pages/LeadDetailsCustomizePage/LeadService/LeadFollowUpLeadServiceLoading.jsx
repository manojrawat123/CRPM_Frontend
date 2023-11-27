import React from "react";
import Skeleton from "react-loading-skeleton";

const LeadFollowUpLeadServiceLoading = () => {
  return (
    <>
      <div className="mx-4">
        <div className=" grid sm:grid-cols-2 grid-cols-1 text-center bg-white border border-solid border-green-500 my-4 rounded-xl">
          <h1 className="text-xl font-bold p-2 ">
            <Skeleton height={30} />
          </h1>
          <div className=" text-xl font-bold p-2">
            <Skeleton height={30} />
          </div>
        </div>

        <div className=" grid grid-cols-5 gap-10 border border-green-600 p-2 text-left font-semibold text-xl rounded-t-xl">
          <div className="col-span-2 font-bold">
            <Skeleton height={30} />
          </div>
          <div className="col-span-3 text-gray-700 overflow-auto font-bold">
            <Skeleton height={30} />
          </div>
        </div>
        {[1, 2].map((element, index) => {
          return (
            <div
              className={
                " grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold "
              }
            >
              <div className="col-span-2 font-bold">
                {" "}
                <Skeleton height={30} />
              </div>
              <div className="col-span-3 text-gray-700 overflow-auto">
                {" "}
                <Skeleton height={30} />
              </div>
            </div>
          );
        })}

        <div className="text-xl font-bold border-2 border-solid  border-green-500 rounded-xl my-4">
          <div className=" text-center bg-white rounded-t-xl">
            <h1 className="text-xl font-bold p-2 text-center bg-gray-200 rounded-t-xl h-10 mb-2"></h1>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 mx-4 gap-x-4 gap-y-2">
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default LeadFollowUpLeadServiceLoading;
