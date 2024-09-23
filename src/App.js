// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // States to hold input text and statistics
  const [text, setText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");

  // Handle the text change and calculate word and character counts
  useEffect(() => {
    // Calculate Unique Word Count (case-insensitive)
    const words = text
      .toLowerCase()
      .match(/\b(\w+)\b/g); // Extract words (case-insensitive)
    const uniqueWordsCount = words ? new Set(words).size : 0;
    setUniqueWords(uniqueWordsCount);

    // Calculate Character Count (excluding spaces and punctuation)
    const charCount = text.replace(/[^a-zA-Z0-9]/g, "").length;
    setCharacterCount(charCount);
  }, [text]);

  // Handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle string replacement
  const handleReplace = () => {
    if (searchString) {
      const newText = text.replaceAll(searchString, replaceString);
      setText(newText);
    }
  };

  return (
    <div className="App">
      <h1>Real-Time Text Analysis and String Replacement</h1>

      {/* Textarea for input */}
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste text here..."
        rows="10"
        cols="50"
      ></textarea>

      {/* Real-time statistics */}
      <div className="stats">
        <p>Unique Word Count: {uniqueWords}</p>
        <p>Character Count (Excluding Spaces & Punctuation): {characterCount}</p>
      </div>

      {/* String replacement section */}
      <div className="string-replace">
        <input
          type="text"
          placeholder="String to find"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          placeholder="String to replace with"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
}

export default App;

