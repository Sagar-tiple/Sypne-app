import React, { useState } from "react";
import VideoInput from "./components/VideoInput";
import VideoPlayer from "./components/VideoPlayer";
import CaptionEditor from "./components/CaptionEditor";
import CaptionList from "./components/CaptionList";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const handleDeleteCaption = (index) => {
    setCaptions(captions.filter((_, i) => i !== index));
  };

  const handleEditCaption = (index, updatedCaption) => {
    const updatedCaptions = captions.map((caption, i) =>
      i === index ? updatedCaption : caption
    );
    setCaptions(updatedCaptions);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "35px", marginBottom: "10px", color: "#999" }}>
        CaptionCraft
      </h1>
      <h1 style={{ fontSize: "20px", marginBottom: "10px", color: "#999" }}>
        Video Captioning Tool
      </h1>
      <VideoInput onUrlChange={setVideoUrl} />
      {videoUrl && (
        <>
          <h2
            style={{ fontSize: "22px", margin: "20px 0 10px", color: "#999" }}
          >
            Video Player
          </h2>
          <VideoPlayer videoUrl={videoUrl} />
          <CaptionEditor onAddCaption={handleAddCaption} />
          <CaptionList
            captions={captions}
            onDeleteCaption={handleDeleteCaption}
            onEditCaption={handleEditCaption}
          />
        </>
      )}
    </div>
  );
}

export default App;
