import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");
  // TODOを保存するための配列（string型の配列）を作成
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (text === "") return; // 空入力なら何もしない
    // 現在のtodos配列に新しいtextを追加した「新しい配列」を作る
    setTodos([...todos, text]);
    setText(""); // 入力欄を空にする
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">TODOリスト作成中</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mr-2"
        />
        <button 
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded"
        >
          追加
        </button>
      </div>

      <ul className="list-disc ml-5">
        {/* todos配列の中身を一つずつ <li> に変換して表示 */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}