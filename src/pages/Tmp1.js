import { useState } from "react";

function Tmp1() {
  const [count, setCount] = useState(0);
  // {console.log("render")}
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <label>{count}</label>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default Tmp1;
