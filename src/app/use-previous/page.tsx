"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const previousCount = useRef(count);

  useEffect(() => {
    previousCount.current = count;
  });

  const handleIncrease = () => {
    setCount((n) => n + 1);
  };

  console.log("vcl");

  return (
    <div>
      <button onClick={handleIncrease}>Count</button>
      <div>
        <div> current count : {count}</div>
        <div style={{ margin: 30 }}>
          previous count: {previousCount.current}
        </div>
      </div>
    </div>
  );
}
