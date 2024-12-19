import React, { useState } from "react";

const CaptionList = ({ captions, onDeleteCaption, onEditCaption }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editCaption, setEditCaption] = useState({
    text: "",
    start: "",
    end: "",
  });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditCaption(captions[index]); // Pre-fill the edit fields
  };

  const handleSaveClick = () => {
    onEditCaption(editIndex, editCaption);
    setEditIndex(null);
    setEditCaption({ text: "", start: "", end: "" });
  };

  return (
    <div>
      <h3>Captions</h3>
      {captions.length === 0 ? (
        <p>No captions added yet.</p>
      ) : (
        <ul style={{ padding: 0, listStyleType: "none" }}>
          {captions.map((caption, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                marginBottom: "8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editCaption.start}
                    onChange={(e) =>
                      setEditCaption({ ...editCaption, start: e.target.value })
                    }
                    placeholder="Start time"
                  />
                  <input
                    type="text"
                    value={editCaption.end}
                    onChange={(e) =>
                      setEditCaption({ ...editCaption, end: e.target.value })
                    }
                    placeholder="End time"
                  />
                  <input
                    type="text"
                    value={editCaption.text}
                    onChange={(e) =>
                      setEditCaption({ ...editCaption, text: e.target.value })
                    }
                    placeholder="Caption text"
                  />
                  <button onClick={handleSaveClick}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <p>
                    <strong>
                      {caption.start} - {caption.end}
                    </strong>
                    : {caption.text}
                  </p>
                  <button onClick={() => handleEditClick(index)}>Edit</button>
                  <button onClick={() => onDeleteCaption(index)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CaptionList;
