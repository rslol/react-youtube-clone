import React, { Component } from "react";

/* Remember this is a Stateless Function Component */
/* onVideoSelect is now a parameter */
const VideoListItem = ({ video, onVideoSelect }) => {
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
    <div>
      {/* When user clicks on video, call the onVideoSelect function from app.js and take video from VideoListItem as a parameter */}
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{videoTitle}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
