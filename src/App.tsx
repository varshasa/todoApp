// src/App.tsx
import React from 'react';
import { TodoProvider } from './context/TodoContext.tsx';
import AddTodo from './components/AddTodo.tsx';
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
