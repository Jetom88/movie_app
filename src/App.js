import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("여러번!");

  useEffect(() => {
    console.log("한번만");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
