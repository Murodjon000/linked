import React, { useState } from "react";
import { useGetUserQuery } from "../../../store/api/user";
import { DownIcon } from "../icons/down";
import { HomeIcon } from "../icons/home";
import { JobIcon } from "../icons/job";
import { LinkedInIcon } from "../icons/logo";
import { MessageIcon } from "../icons/message";
import { NetworkIcon } from "../icons/network";
import { NotifyIcon } from "../icons/notify";
import { SearchIcon } from "../icons/search";

export const HeaderList = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon className="w-full" />,
    activeicon: <HomeIcon className="w-full" fill="black" opacity="1" />,
  },
  {
    id: 2,
    name: "My Network",
    icon: <NetworkIcon className="w-full" />,
    activeicon: <NetworkIcon className="w-full" fill="black" opacity="1" />,
  },
  {
    id: 3,
    name: "Jobs",
    icon: <JobIcon className="w-full" />,
    activeicon: <JobIcon className="w-full" fill="black" opacity="1" />,
  },
  {
    id: 4,
    name: "Messaging",
    icon: <MessageIcon className="w-full" />,
    activeicon: <MessageIcon className="w-full" fill="black" opacity="1" />,
  },
  {
    id: 5,
    name: "Notifications",
    icon: <NotifyIcon className="w-full" />,
    activeicon: <NotifyIcon className="w-full" fill="black" opacity="1" />,
  },
];

export const Header = () => {
  const { data, isFetching } = useGetUserQuery();
  const [active, setActive] = useState(1);

  return (
    <div className="bg-white  max-w-7xl flex justify-between md:mx-auto mx-4 items-center">
      <div className="block md:hidden mr-4">
        <img src={data?.image} className="rounded-full h-8" alt="User Avatar" />
      </div>
      <div className="flex items-center py-2.5 w-full">
        <LinkedInIcon className="hidden md:block" />
        <div className="bg-inputBlue flex items-center ml-2.5 h-full p-2.5 rounded md:w-72 w-full">
          <SearchIcon />
          <input
            type="text"
            className=" border-none bg-transparent w-full outline-none bg-none ml-2 text-xs"
          />
        </div>
      </div>
      <div className="block md:hidden ml-5">
        <MessageIcon fill="black" opacity="1" />
      </div>
      <div className="items-center hidden md:flex">
        <div className="flex justify-between w-full py-2.5">
          {HeaderList.map((h) => (
            <div
              className="flex flex-col justify-center mx-6 cursor-pointer w-max relative "
              key={`${h.id}__header-tab`}
              onClick={() => setActive(h.id)}
            >
              <div className="w-full justify-center">
                {active === h.id ? h.activeicon : h.icon}
              </div>
              <p
                className={`text-xs font-sans   ${
                  active === h.id ? "text-black" : "text-gray-60"
                } `}
              >
                {h.name}
              </p>
              {active === h.id && (
                <span className="border-b-2 border-black -bottom-2.5 absolute w-20  header__menu-tab" />
              )}
            </div>
          ))}
          {!isFetching && data && (
            <div
              className="flex flex-col justify-center ml-6 cursor-pointer relative"
              onClick={() => setActive(7)}
            >
              <img
                src={data.image}
                className="rounded-full h-7 w-7 mx-auto"
                alt="User Avatar"
              />

              <div className="flex items-center">
                <p
                  className={`text-xs font-sans ${
                    active === 7 ? "text-black" : "text-gray-60"
                  }`}
                >
                  Me
                </p>
                <DownIcon
                  fill={active === 7 && "black"}
                  opacity={active === 7 && "1"}
                />
              </div>
            </div>
          )}
        </div>
        <div className="border-r border-gray-60 h-16 mx-7" />
        <div className="flex items-center">
          <div
            className="flex flex-col justify-center mx-6 cursor-pointer relative"
            onClick={() => setActive(8)}
          >
            <div className="w-full justify-center">
              <JobIcon
                fill={active === 8 && "black"}
                opacity={active === 8 && "1"}
              />
            </div>
            <p className="text-xs font-sans">
              <DownIcon
                className="w-full"
                fill={active === 8 && "black"}
                opacity={active === 8 && "1"}
              />
            </p>
          </div>
          <div className="w-32 h-100">
            <p className="text-xs text-brown ">Try Premium for free</p>
          </div>
        </div>
      </div>
    </div>
  );
};
