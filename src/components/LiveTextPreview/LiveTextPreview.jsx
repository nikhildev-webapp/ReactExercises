import React, { useState } from "react";

const LiveTextPreview = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>LiveTextPreview</h1>
      <label htmlFor="text">Text:</label>
      <input
        type="text"
        id="text"
        value={text}
        placeholder="Start typing..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You Typed:</p>
      <p>{text}</p>
    </>
  );
};

export default LiveTextPreview;
