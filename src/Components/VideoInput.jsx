import React, { useState } from "react";

const VideoInput = ({ onUrlChange }) => {
  const [url, setUrl] = useState("");

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    onUrlChange(url);
  };

  return (
    <form onSubmit={handleUrlSubmit}>
      <input
        type="text"
        placeholder="Enter video URL (e.g., https://example.com/video.mp4)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoInput;
