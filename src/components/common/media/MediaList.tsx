import React from "react";
import MediaItem from "./MediaItem";

const MediaList = () => {
  return (
    <div className="media_list">
      <div className="slide_wrap">
        <div className="slide_container">
          <ul className="list">
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaList;
