import { useState } from "react";
import "./App.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <br />
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea></ChildArea>
    </div>
  );
}
