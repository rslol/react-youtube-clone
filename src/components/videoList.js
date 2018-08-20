import React, { Component } from "react";
import VideoListItem from "./videoListItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        /* we are passing onVideoSelect and passing it to the appropriate child */
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
