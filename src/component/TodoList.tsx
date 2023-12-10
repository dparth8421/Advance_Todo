import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../Model";

interface Props {
  state: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ state, setState }: Props) => {
  return (
    <div className="flex justify-evenly flex-wrap w-11/12">
      {state.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={state}
          setState={setState}
        />
      ))}
    </div>
  );
};

export default TodoList;
