import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Simple Counter SPA</h1>
      <h2>Count: {count}</h2>

      <button 
        className="increment" 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button 
        className="decrement" 
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
