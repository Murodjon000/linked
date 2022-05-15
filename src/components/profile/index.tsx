import React from "react";
import { useGetUserQuery } from "../../../store/api/user";
import { DownIcon } from "../icons/down";
import { PlusIcon } from "../icons/plus";
import { PremiumIcon } from "../icons/premium";

export const UserProfile = () => {
  const { data, isFetching } = useGetUserQuery();

  return (
    <>
      {!isFetching && data && (
        <>
          <div className="w-64 rounded-lg border border-lightGray60 bg-white divide-y divide-lightGray60 box-border">
            <div className="relative">
              <img
                src={data.banner}
                alt="User Banner"
                className="h-14 w-full rounded-t-lg"
              />
              <img
                src={data.image}
                alt="User image"
                className="h-16 w-16 rounded-full border-2 border-white absolute  header__menu-tab"
              />
              <div className="text-center h-24 flex justify-end flex-col pb-2.5">
                <h4 className="text-base font-normal">
                  {data.firstName} {data.lastName}
                </h4>
                <p className="font-light text-xs">{data.role}</p>
              </div>
            </div>

            <div className="flex flex-col px-4 py-2.5 cursor-pointer hover:bg-lightGray60">
              <div className="flex justify-between items-baseline">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-60">Connections</p>
                  <p className="text-xs text-black">Grow your network</p>
                </div>
                <span className="font-bold text-xs text-linkedBlue">
                  {data.connections}
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-2.5">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-60">Followers</p>
                </div>
                <span className="font-bold text-xs text-linkedBlue">
                  {data.followers}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-baseline px-4 py-2.5 cursor-pointer hover:bg-lightGray60">
              <div className="flex flex-col">
                <p className="text-xs text-gray-60">
                  Access exclusive tools & insights
                </p>
                <p className="text-xs text-black flex items-center">
                  <PremiumIcon className="mr-2" /> Try permium for free
                </p>
              </div>
            </div>
            <div className="flex justify-between items-baseline px-4 rounded-b-lg py-2.5 cursor-pointer hover:bg-lightGray60">
              <p className="text-xs text-black">My items</p>
            </div>
          </div>

          <div className="w-64 rounded-lg border border-lightGray60 bg-white  box-border pt-4 mt-8">
            <div className="flex items-center justify-between px-4  py-2.5 cursor-pointer hover:bg-lightGray60">
              <p className="text-sm text-gray-60">Connections</p>
              <span>
                <DownIcon />
              </span>
            </div>

            <div className="flex justify-between items-center  py-2.5 px-4  cursor-pointer hover:bg-lightGray60">
              <p className="font-normal text-sm text-linkedBlue">Groups</p>
              <span>
                <DownIcon />
              </span>
            </div>
            <div className="flex justify-between items-center  py-2.5 px-4  cursor-pointer hover:bg-lightGray60">
              <p className="font-normal text-sm text-linkedBlue">Events</p>
              <span>
                <PlusIcon />
              </span>
            </div>
            <div className="flex justify-between items-center  px-4  py-2.5 cursor-pointer hover:bg-lightGray60">
              <p className="font-normal text-sm text-linkedBlue">Pages</p>
              <span>
                <PlusIcon />
              </span>
            </div>
            <div className="flex justify-center items-center  px-4 py-2.5 cursor-pointer hover:bg-lightGray60 rounded-b-lg border-t border-lightGray60">
              <p className="text-sm text-gray-60">Discover more</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
