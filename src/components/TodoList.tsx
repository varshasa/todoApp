// src/components/TodoList.tsx
import React from 'react';
import { useTodoContext } from '../context/TodoContext.tsx';
import Todo from './Todo.tsx';

const TodoList: React.FC = () => {
  const { todos, editTodo, deleteTodo } = useTodoContext();

  if (todos.length === 0) {
    return <p className="text-gray-500">No todos yet. Add some!</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
