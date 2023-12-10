import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../Model";

interface Props {
  state: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ state, setState }: Props) => {
  return (
    <div className="flex flex-col mt-3 w-11/12 md:flex-row md:justify-between items-start">
      <div className="bg-red-400 p-4 mb-4 md:mb-0 md:w-1/2 md:mr-4">
        <span className="text-3xl text-white">Active Tasks</span>
        {state.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={state}
            key={todo.id}
            setState={setState}
          />
        ))}
      </div>
      <div className="bg-green-400 p-4 md:w-1/2">
        <span className="text-3xl text-white">Completed Tasks</span>
        {state.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={state}
            key={todo.id}
            setState={setState}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
