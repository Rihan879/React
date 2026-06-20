import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default ColorChanger;