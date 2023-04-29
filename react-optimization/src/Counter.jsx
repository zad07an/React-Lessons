import React, { memo, useRef, useState } from "react";

export default memo(function Counter({
  handleCountIsIncremented,
  handleCountIsDecremented,
  data,
  x,
}) {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  countRef.current++;

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    handleCountIsIncremented();
  };
  const handleDecrement = () => {
    count > 0 && setCount((prev) => prev - 1);
    handleCountIsDecremented();
  };

  console.log("Counter: " + countRef.current);

  return (
    <div>
      <p>
        {data?.text} {x.text}
      </p>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}, (prevProps, nextProps) => {
  if (prevProps.data.text === nextProps.data.text) {
    return true;
  }
  if (prevProps.x.text === nextProps.x.text) {
    return true
  }
  return false;
})
