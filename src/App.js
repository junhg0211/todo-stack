import { useState } from "react";
import styles from "./App.module.css";
import StackObject from "./components/StackObject";

function App() {
  const [stackContents, setStackContents] = useState([]);

  function handleKeyDown(e) {
    if (e.code !== "Enter") {
      return;
    }

    e.target.value = e.target.value.trim();
    if (e.target.value.length <= 0) {
      return;
    }

    setStackContents([e.target.value, ...stackContents]);
    e.target.value = "";
  }

  function pop() {
    setStackContents(stackContents.slice(1));
  }

  return (
    <div className={styles["main-container"]}>
      <input
        type="text"
        className={styles["prompt-input"]}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={pop} className={styles["button"]}>
        Pop
      </button>
      <div>
        {stackContents.map((content, i) => (
          <StackObject key={i} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
