import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // テキスト欄のuseState
  const [text, setText] = useState("");
  // 子コンポーネントの文字を表示させるかしないかのuseState
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    // ここの処理はどういう意味？
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
