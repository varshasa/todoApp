// src/components/AddTodo.tsx
import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext.tsx';

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoContext();

  const handleAdd = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    } else {
      alert('Please enter a valid todo');
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        className="border rounded px-3 py-2 mr-2 flex-1"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a todo"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
