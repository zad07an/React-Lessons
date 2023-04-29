import { useCallback, useMemo, useRef, useState } from "react";
import Counter from "./Counter";
import {v4 as uuid} from "uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [countIs, setCountIs] = useState(0);
  const countRef = useRef(0);

  countRef.current++;

  console.log("App: " + countRef.current)

  const handleCountIsDecremented = useCallback(() => setCountIs(false), []);
  const handleCountIsIncremented = useCallback(() => setCountIs(true), []);
  const handleChange = useCallback((e) => setInput(e.target.value), [])

  const data = useMemo(() => {
    return {text: uuid()}
  }, [])
  const data2 = useMemo(() => {
    return {text: "World"}
  }, [])

  return (
    <div>
      <p>{input}</p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
      <p>
        Count is{" "}
        {countIs === 0 ? "zero" : countIs ? "incremented" : "decremented"}
      </p>
      <Counter
        data={data}
        x={data2}
        handleCountIsDecremented={handleCountIsDecremented}
        handleCountIsIncremented={handleCountIsIncremented}
      />
    </div>
  );
};

export default App;
