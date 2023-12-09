import React, { useState } from "react";
import "./index.css";
import InputField from "./component/InputField";
import { Todo } from "./Model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [state, setState] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setState([...state, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }

    // console.log(state);
  };

  // console.log(todo)
  return (
    <div className="bg-blue-500 flex flex-col items-center pt-10 h-screen   ">
      <span className="text-white font-serif text-4xl mb-5  ">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
