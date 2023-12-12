import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../Model";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  state: Todo[];
  setState: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  state,
  setState,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="flex flex-col mt-3 w-11/12 md:flex-row md:justify-between items-start">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="bg-red-400 p-4 mb-4 md:mb-0 md:w-1/2 md:mr-4 "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-3xl text-white">Active Tasks</span>
            {state.map((todo, index) => (
              <SingleTodo
                todo={todo}
                index={index}
                todos={state}
                key={todo.id}
                setState={setState}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="bg-green-400 p-4 md:w-1/2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-3xl text-white">Completed Tasks</span>
            {completedTodos?.map((todo, index) => (
              <SingleTodo
                todo={todo}
                index={index}
                todos={completedTodos}
                key={todo.id}
                setState={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
