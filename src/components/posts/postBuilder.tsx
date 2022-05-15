import React from "react";
import { useGetUserQuery } from "../../../store/api/user";
import { CalendarIcon } from "../icons/calendar";
import { PhotoIcon } from "../icons/photo";
import { TextIcon } from "../icons/text";
import { VideoIcon } from "../icons/video";

export const postBuilderFeatures = [
  {
    id: 12,
    name: "Photo",
    icon: <PhotoIcon />,
  },
  {
    id: 13,
    name: "Video",
    icon: <VideoIcon />,
  },
  {
    id: 14,
    name: "Event",
    icon: <CalendarIcon />,
  },
  {
    id: 15,
    name: "Write Article",
    icon: <TextIcon />,
  },
];

export const PostBuilder = () => {
  const { data, isFetching } = useGetUserQuery();

  return (
    <>
      {!isFetching && data && (
        <div className="rounded-lg border border-lightGray60 bg-white max-w-570">
          <div className="flex items-center pt-2.5  px-4 mb-2.5">
            <img
              src={data.image}
              className="h-12 w-12 rounded-full"
              alt="User image"
            />
            <input
              type="text"
              placeholder="Start a post"
              className="text-base border border-lightGray60 rounded-5xl p-3 outline-none ml-4 w-full"
            />
          </div>
          <div className="flex justify-between ">
            {postBuilderFeatures.map((p) => (
              <div
                className="w-full hover:bg-gray-10 rounded flex items-center justify-center cursor-pointer p-2"
                key={`${p.id}__post`}
              >
                {p.icon}
                <p className="text-sm text-gray-60 ml-2">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
