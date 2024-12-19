import React, { useState } from "react";

const CaptionEditor = ({ onAddCaption }) => {
  const [text, setText] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleAddCaption = () => {
    onAddCaption({ text, start, end });
    setText("");
    setStart("");
    setEnd("");
  };

  return (
    <div>
      <h3>Add Captions</h3>
      <input
        type="text"
        placeholder="Caption text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Start time (e.g., 00:00:05)"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="End time (e.g., 00:00:10)"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        required
      />
      <button onClick={handleAddCaption}>Add Caption</button>
    </div>
  );
};

export default CaptionEditor;
