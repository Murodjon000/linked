import React from "react";
import { Header } from "./components/header/Header";
import { DownIcon } from "./components/icons/down";
import { WriteIcon } from "./components/icons/pen";
import { Posts } from "./components/posts";
import { PostBuilder } from "./components/posts/postBuilder";
import { UserProfile } from "./components/profile";

export const App = () => (
  <div className="bg-whiteSmoke w-full overflow-hidden">
    <div className="w-full bg-white">
      <Header />
    </div>
    <div className="pt-8">
      <div className="flex  max-w-7xl mx-auto">
        <div className="hidden md:block">
          <UserProfile />
        </div>
        <div className="md:max-w-xl md:mx-8 md:px-4 flex justify-center flex-col">
          <div className="hidden md:block">
            <PostBuilder />
            <div className="flex items-center justify-between  mt-5 mb-10">
              <div className="border-t border-lightGray60 w-full p-0 " />
              <span className="text-xs font-light flex items-center w-28 ml-2 justify-end">
                Sort By:
                <p className="font-normal flex items-center cursor-pointer">
                  Top <DownIcon fill="black" opacity="1" />
                </p>
              </span>
            </div>
          </div>

          <div className="bg-white md:hidden  mx-auto p-2.5 mb-2.5 flex items-center">
            <WriteIcon />
            <p className="text-lg font-light ml-2.5">
              What do you want to talk about?
            </p>
          </div>

          <Posts />
        </div>
      </div>
    </div>
  </div>
);
