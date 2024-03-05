import { useState } from "react";
import styles from "./StackObject.module.css";

function StackObject({ content }) {
  const [isChecked, setIsChecked] = useState(false);

  function onClick() {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <p className={isChecked ? styles["cancelled"] : ""} onClick={onClick}>
        <input type="checkbox" checked={isChecked} onChange={onClick}></input>{" "}
        {content}
      </p>
    </div>
  );
}

export default StackObject;
