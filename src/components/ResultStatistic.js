import React from "react";
import store from "../store";

export default function ResultStatistic() {
  const { recap } = store();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      <Box title="Total Views" value={recap.total_views} />
      <Box title="Total Downloads" value={recap.total_downloads} />
      <Box title="Total Likes" value={recap.total_likes} />
      <Box title="Total Uploaded" value={recap.total_photos} />
    </div>
  );
}

const Box = ({ title, value }) => {
  return (
    <div className="rounded-xl bg-gray-100 p-5 flex flex-col items-center justify-center gap-1">
      <p className="opacity-50">{title}</p>
      <p className="text-xl">{value}</p>
    </div>
  );
};
