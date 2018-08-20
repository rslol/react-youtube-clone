import React from "react";

const VideoDetail = ({ video }) => {
  /* If no video, render a simple div until a video is in the video array */

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  /* Remember back ticks is how to use the angular-esp templating to inject variables */
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
