import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return <p>Please enter a valid video URL to load the video.</p>;
  }

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls
        width="640px"
        height="360px"
        onError={(e) => console.error("Error loading video:", e)}
      />
    </div>
  );
};

export default VideoPlayer;
