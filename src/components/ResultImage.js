import React from "react";
import { IconDownload, IconEye, IconHeart } from "@tabler/icons-react";

export default function ResultImage({ photo }) {
  const {
    urls,
    alt_description,
    likes,
    width,
    height,
    statistics: { views, downloads },
  } = photo;

  return (
    <div className="relative aspect-video md:first:col-span-2">
      <img
        className="h-full rounded-2xl object-cover"
        height={height}
        width={width}
        src={urls.regular}
        alt={alt_description}
      />

      <div className="absolute bottom-4 left-4 flex items-center justify-around gap-2 text-white">
        <span className="flex items-center gap-1">
          <IconEye stroke={1.5} size={20} />
          {Number(views.total).toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <IconDownload stroke={1.5} size={20} />
          {Number(downloads.total).toLocaleString()}
        </span>

        <span className="flex items-center gap-1">
          <IconHeart stroke={1.5} size={20} />
          {Number(likes).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
