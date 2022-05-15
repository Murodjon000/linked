import React, { useState } from "react";
import { useGetPostsQuery } from "../../../store/api/posts";
import { useGetUserCoinQuery } from "../../../store/api/user";
import { CommnetIcon } from "../icons/comment";
import { EarthIcon } from "../icons/earth";
import { LikeIcon } from "../icons/like";
import { OptionsIcon } from "../icons/option";
import { SendIcon } from "../icons/send";
import { ShareIcon } from "../icons/share";

export const postHelpers = [
  {
    id: 22,
    name: "Like",
    icon: <LikeIcon fill="#66666699" opacity="0.6" />,
    activeIcon: <LikeIcon />,
  },
  {
    id: 23,
    name: "Comment",
    icon: <CommnetIcon />,
  },
  {
    id: 24,
    name: "Share",
    icon: <ShareIcon />,
  },
  {
    id: 25,
    name: "Send",
    icon: <SendIcon />,
  },
];

export const Posts = () => {
  const { data, isFetching } = useGetPostsQuery();
  const { data: userCoin } = useGetUserCoinQuery();
  const [liked, setLiked] = useState<number>(111);

  console.log(userCoin, "COI");
  return (
    <>
      {!isFetching &&
        data &&
        data.map((p) => (
          <div
            className="rounded-lg border border-lightGray60 bg-white max-w-570 pt-4 pb-1 mb-7 w-full"
            key={`${p.id}__posts`}
          >
            <div className="px-4 flex justify-between">
              <div className="flex items-center">
                <img
                  src={p.user.image}
                  alt="User avatar"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex flex-col ml-2.5">
                  <h4 className="text-base font-normal">
                    {p.user.firstName} {p.user.lastName}
                  </h4>
                  <p className="text-xs text-gray-60">
                    {p.user.followers} followers
                  </p>
                  <span className="text-xs text-gray-60 font-light flex items-center">
                    {p.postedDate} <EarthIcon className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="cursor-pointer">
                <OptionsIcon />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <p className="text-base font-normal text-black">{p.message}</p>
              <a
                href={p.linkUrl}
                target="_blank"
                className="text-linkedBlue text-base font-normal no-underline hover:underline"
              >
                {p.linkUrl}
              </a>
            </div>
            <img src={p.postImage} alt="Image" className="w-full h-72" />
            <div className="flex items-center pt-2 px-4">
              {postHelpers.map((ph) => (
                <div
                  className="flex items-center cursor-pointer  hover:bg-lightGray60 p-2 rounded"
                  key={`${ph.id}__post-helper`}
                  onClick={() => setLiked(p.id)}
                >
                  {liked === p.id
                    ? ph.activeIcon
                      ? ph.activeIcon
                      : ph.icon
                    : ph.icon}
                  <span className="text-sm text-gray-60 font-normal ml-1.5">
                    {ph.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};
