import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Characters: {text.length}</h3>
    </div>
  );
}

export default CharacterCounter;