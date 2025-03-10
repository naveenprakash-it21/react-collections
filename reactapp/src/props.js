import React, { useState } from "react";
import Display from "./display"; // Import child component

const PropsComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Props Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Display value={count} />
    </div>
  );
};

export default PropsComponent;
