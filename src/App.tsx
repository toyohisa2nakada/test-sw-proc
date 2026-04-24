import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("my-todos");
    return saved ? JSON.parse(saved) : [];
  });

  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  // todos が更新されるたびに実行される
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
    console.log("保存されました！");
  }, [todos]);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">TODOアプリ（保存機能付き）</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white p-2 px-4 rounded">
        追加
      </button>
      <p className="mt-2">現在の件数：{todos.length}</p>
      <ul className="mt-4 list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}