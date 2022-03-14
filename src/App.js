import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("여러번!");

  useEffect(() => {
    // 첫 번째 arg는 실행시키고 싶은 코드
    // 두 번째([])는 dependencies(react가 지켜봐야하는 것) 변화할 때 react.js가 코드를 실행시킴
    console.log("한번만");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("[]안에 둘 중 하나가 바뀌면 실행되는 것");
  }, [keyword, counter]);
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
